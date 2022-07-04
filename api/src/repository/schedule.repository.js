const knex = require('../config/database');
const dayjs = require('dayjs');
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

exports.findByDate = (date) => {
    const convert = dayjs(date, 'DD/MM/YYYY');
    const start = convert.startOf('day').toDate();
    const end = convert.endOf('day').toDate();
    return knex('schedules').whereBetween('time', [start, end]);
};
