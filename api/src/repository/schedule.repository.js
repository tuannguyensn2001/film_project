const knex = require('../config/database');
exports.create = async (data) => {
    return knex('schedules').insert(data);
};

exports.findByTime = async (time) => {
    return knex('schedules').where('time', time).first();
};

exports.findByTimeAndRoom = async (time, room) => {
    return knex('schedules').where('time', time).where('room', room).first();
};

exports.findByFilm = (filmId) => {
    return knex('schedules')
        .select('*')
        .where('film_id', filmId)
        .orderBy('time');
};
