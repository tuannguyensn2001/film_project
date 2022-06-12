const knex = require('../config/database');

exports.create = function (film) {
  return knex.insert(film).into('films');
};
