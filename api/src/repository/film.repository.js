const knex = require('../config/database');

exports.create = function (film) {
  return knex.insert(film).into('films');
};

exports.all = function () {
  return knex('films').select('*');
};

exports.findById = (id) => {
  return knex('films').select('*').where('id', id).first();
};

exports.update = (id, data) => {
  return knex('films').where('id', id).update(data);
};
