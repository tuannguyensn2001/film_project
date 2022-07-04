/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('rooms').del();
    await knex('rooms').insert([
        { id: 1, name: 'Phong 1', amount: 30 },
        { id: 2, name: 'Phong 2', amount: 40 },
        { id: 3, name: 'Phong 3', amount: 50 },
        { id: 4, name: 'Phong 4', amount: 60 },
        { id: 5, name: 'Phong 5', amount: 70 },
        { id: 6, name: 'Phong 6', amount: 80 },
    ]);
};
