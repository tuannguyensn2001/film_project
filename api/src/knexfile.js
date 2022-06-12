// Update with your config settings.

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const { DATABASE } = require('./config');

/**
 * @type { Object.<string, import('knex').Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      port: DATABASE.PORT,
      user: DATABASE.USER,
      host: DATABASE.HOST,
      password: DATABASE.PASSWORD,
      database: DATABASE.NAME,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/database/migrations',
    },
    seeds: {
      directory: __dirname + '/database/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
