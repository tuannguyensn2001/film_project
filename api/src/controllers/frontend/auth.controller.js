const Joi = require('joi');
const createError = require('http-errors');
const { makePassword, comparePassword } = require('../../packages/hash');
const userRepository = require('../../repository/user.repository');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config');

exports.register = async (req) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        username: Joi.string().required(),
        password: Joi.string().required(),
    });

    const { value: user, error } = schema.validate(req.body);

    if (!!error?.message) {
        throw createError(400, 'data is not valid');
    }

    const checkExisted = await userRepository.findByEmail(user.email);

    if (!!checkExisted) {
        throw createError(409, 'user existed');
    }

    const hashPassword = await makePassword(user.password);

    await userRepository.create({
        ...user,
        password: hashPassword,
    });

    return {
        message: 'done',
    };
};

exports.login = async (req) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    const { value: payload, error } = schema.validate(req.body);

    if (Boolean(error)) {
        throw createError(400, 'data is not valid');
    }

    const user = await userRepository.findByEmail(payload.email);

    if (!Boolean(user)) {
        throw createError(400, 'email or password not valid');
    }

    const check = await comparePassword(payload.password, user.password);

    if (!check) {
        throw createError(400, 'email or password not valid');
    }

    const accessToken = jwt.sign(
        {
            data: {
                id: user.id,
            },
        },
        SECRET_KEY,
        { expiresIn: '100h' }
    );

    const { password, ...result } = user;

    return {
        data: {
            accessToken,
            user: result,
        },
    };
};

exports.getMe = async (req) => {
    return {
        message: 'done',
    };
};
