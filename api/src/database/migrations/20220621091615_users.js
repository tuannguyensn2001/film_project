/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('email');
        table.string('username');
        table.string('password');
        table.timestamps(true, true);
    });
};

/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
