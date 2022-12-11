const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');
const { Person } = require('../src/models');
const config = require('../src/config');

faker.locale = 'ru';

function createRandomPerson() {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    middlename: faker.name.middleName(),
    birthday: faker.date.birthdate({ mode: 'age', min: 18, max: 55 }),
  };
}

/**
 * Make any changes you need to make to the database here
 */
async function up() {
  await mongoose.connect(config.db.url);
  await Person.insertMany([...Array.from({ length: 50 }, () => createRandomPerson())]);
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  await mongoose.connect(config.db.url);
  await Person.deleteMany();
}

module.exports = { up, down };
