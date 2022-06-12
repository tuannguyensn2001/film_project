/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
  return knex.schema.createTable('films', (table) => {
    table.increments('id');
    table.string('name');
    table.string('description', 1000);
    table.string('director_raw');
    table.string('actor_raw');
    table.string('category_raw');
    table.integer('minutes');
    table.string('language_raw');
    table.timestamp('time_publish');
    table.integer('admin_id');
    table.string('thumbnail');
    table
      .tinyint('status')
      .comment('1:chuan bi ra mat, 2: dang phat hanh, 3: dong ');
    table.timestamps(true, true);
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
  return knex.schema.dropTable('films');
};
