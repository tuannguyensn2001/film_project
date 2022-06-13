const { DATABASE } = require('./index');
const knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: DATABASE.HOST,
    port: DATABASE.PORT,
    user: DATABASE.USER,
    password: DATABASE.PASSWORD,
    database: DATABASE.NAME,
  },
});

module.exports = knex;
