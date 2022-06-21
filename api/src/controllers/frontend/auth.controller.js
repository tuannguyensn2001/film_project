const Joi = require('joi');
const createError = require('http-errors');
const { makePassword } = require('../../packages/hash');
const userRepository = require('../../repository/user.repository');

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
