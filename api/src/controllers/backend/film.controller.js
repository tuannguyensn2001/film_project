const Joi = require('joi');
const filmRepository = require('../../repository/film.repository');
const dayjs = require('dayjs');
const createError = require('http-errors');

const validateFilm = (film) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        director_raw: Joi.string().required(),
        actor_raw: Joi.string().required(),
        category_raw: Joi.string().required(),
        minutes: Joi.number().required(),
        language_raw: Joi.string().required(),
        time_publish: Joi.string().required(),
        thumbnail: Joi.string().required(),
        status: Joi.number().required().min(1).max(3),
    });
    const { value, error } = schema.validate(film);

    if (!!error?.message) {
        throw createError(400, 'data is not valid');
    }

    return {
        ...value,
        time_publish: dayjs(value.time_publish, 'DD/MM/YYYY').toDate(),
    };
};

const create = async (req, res) => {
    const value = validateFilm(req.body);

    const result = await filmRepository.create(value);

    return res.json({
        message: req.t('film.create_success'),
    });
};

const index = async (req, res) => {
    const result = await filmRepository.all();
    return res.json({
        message: 'get success',
        data: result,
    });
};

const show = async (req, res, next) => {
    const id = req.params.id;

    if (!id) {
        throw createError(404, 'not found this film ');
    }

    const film = await filmRepository.findById(id);

    if (!film) throw createError(404, 'not found this film');

    return {
        message: 'done',
        data: film,
    };
};

const update = async (req) => {
    const id = req.params.id;

    if (!id) {
        throw createError(400, 'data is not valid');
    }

    const film = validateFilm(req.body);

    const check = await filmRepository.findById(id);

    if (!check) {
        throw createError(404, 'not found');
    }

    await filmRepository.update(id, film);

    return {
        message: 'update successfully',
    };
};

module.exports = {
    create,
    index,
    show,
    update,
};
