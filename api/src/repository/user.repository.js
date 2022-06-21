const knex = require('../config/database');
exports.create = (user) => {
    return knex('users').insert(user);
};

exports.findByEmail = (email) => {
    return knex('users').where('email', email).first();
};
