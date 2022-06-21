const Joi = require('joi');
const scheduleRepository = require('../../repository/schedule.repository');
const filmRepository = require('../../repository/film.repository');
const dayjs = require('../../packages/dayjs');
const createError = require('http-errors');

const create = async (req) => {
    const schema = Joi.object({
        film_id: Joi.required(),
        time: Joi.required(),
        room: Joi.number().min(1).max(6).integer(),
    });

    const { value, error } = schema.validate(req.body);

    if (!!error?.message) {
        throw createError(400, 'data is not valid');
    }

    const time = dayjs(value.time, 'HH:mm DD/MM/YYYY');

    if (!time.isValid()) {
        throw createError(400, 'data is not valid');
    }

    const film = await filmRepository.findById(value.film_id);

    if (!film) {
        throw createError(400, 'data is not valid');
    }

    const checkByTime = await scheduleRepository.findByTimeAndRoom(
        time.toDate(),
        value.room
    );

    if (!!checkByTime) {
        throw createError(409, 'schedule existed');
    }

    await scheduleRepository.create({
        ...value,
        time: time.toDate(),
    });

    return {
        message: 'create successfully',
    };
};

const getByFilm = async (req) => {
    const film = req.params.id;

    const result = await scheduleRepository.findByFilm(film);

    return {
        message: 'get successfully',
        data: result,
    };
};

module.exports = { create, getByFilm };
