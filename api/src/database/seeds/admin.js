/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
const { makePassword } = require('../../packages/hash');
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  const password = await makePassword('java2001');
  await knex('admins').del();
  await knex('admins').insert([
    {
      username: 'tuannguyensn2001',
      email: 'tuannguyensn2001a@gmail.com',
      password: password,
      role: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
