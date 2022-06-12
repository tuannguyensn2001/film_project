/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
  return knex.schema.createTable('admins', (table) => {
    table.increments('id');
    table.string('email');
    table.string('password');
    table.string('username');
    table.tinyint('role');
    table.timestamps(true, true);
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
  return knex.schema.dropTable('admins');
};
