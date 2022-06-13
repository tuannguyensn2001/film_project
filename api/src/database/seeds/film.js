/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');
const dayjs = require('dayjs');
const sample = require('lodash/sample');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);
  await knex('films').del();
  const data = [];

  for (let i = 1; i <= 50; i++) {
    const film = {
      name: faker.name.findName(),
      description: faker.lorem.paragraph(),
      director_raw: faker.name.findName(),
      actor_raw: faker.name.findName(),
      category_raw: sample(['Hành động', 'Kinh dị', 'Hoạt hình']),
      language_raw: sample(['Tiếng Anh', 'Tiếng Việt']),
      minutes: faker.random.numeric(3),
      time_publish: dayjs(faker.date.future()).toDate(),
      thumbnail: 'https://files.betacorp.vn/files/media%2fimages%2f2022%2f04%2f08%2f274963826-675063727035864-2826472215001750256-n-181843-080422-22.jpg',
      status: sample([1, 2, 3])
    };
    data.push(film);
  }

  await knex('films').insert(data);

};
