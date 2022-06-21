/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
    return knex.schema.createTable('orders', (table) => {
        table.integer('user_id');
        table.integer('schedule_id');
        table.string('position');
        table.tinyint('status');
        table.timestamps(true, true);
    });
};

/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('orders');
};
