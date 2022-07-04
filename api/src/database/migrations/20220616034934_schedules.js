/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
    return knex.schema.createTable('schedules', (table) => {
        table.increments('id');
        table.integer('film_id');
        table.timestamp('time');
        table.tinyint('room_id');
        table.timestamps(true, true);
    });
};

/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('schedules');
};
