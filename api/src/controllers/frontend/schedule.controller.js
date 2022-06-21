const scheduleRepository = require('../../repository/schedule.repository');
const createError = require('http-errors');

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
