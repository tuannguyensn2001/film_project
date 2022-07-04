/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');
const dayjs = require('../../packages/dayjs');

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    // await knex('table_name').del()
    // await knex('table_name').insert([
    //   {id: 1, colName: 'rowValue1'},
    //   {id: 2, colName: 'rowValue2'},
    //   {id: 3, colName: 'rowValue3'}
    // ]);
    await knex('schedules').del();

    const data = [];

    const start = dayjs('01/07/2022', 'DD/MM/YYYY').toDate();
    const end = dayjs('12/07/2022', 'DD/MM/YYYY').toDate();

    for (let i = 1; i <= 100; i++) {
        const schedule = {
            film_id: faker.datatype.number({
                min: 1,
                max: 10,
            }),
            room_id: faker.datatype.number({
                min: 1,
                max: 6,
            }),
            time: faker.date.between(start, end),
        };
        data.push(schedule);
    }

    await knex('schedules').insert(data);
};
