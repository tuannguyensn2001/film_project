const knex = require('../config/database');
exports.all = () => {
    return knex('rooms');
};
