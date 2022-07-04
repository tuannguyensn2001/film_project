const scheduleRepository = require('../../repository/schedule.repository');
const filmRepository = require('../../repository/film.repository');
const createError = require('http-errors');
const dayjs = require('dayjs');

exports.findByFilm = async (req) => {
    const filmId = req?.params?.id;

    if (!filmId) {
        throw createError(400, 'id not valid');
    }

    const result = await scheduleRepository.findByFilm(filmId);

    return {
        message: 'done',
        data: result,
    };
};

exports.index = async (req) => {
    const day = req?.query?.time || dayjs().format('DD/MM/YYYY');

    const result = await scheduleRepository.findByDate(day);

    const count = {};

    result.forEach((item) => {
        if (!Boolean(count[item.film_id])) {
            count[item.film_id] = [];
        }
        count[item.film_id].push(item);
    });

    const films = (await filmRepository.findByIds(Object.keys(count))).map(
        (item) => {
            return {
                ...item,
                schedules: count[item.id],
            };
        }
    );

    return {
        message: 'done',
        data: films,
    };
};
