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
    birthday: faker.date.birthdate(),
  };
}

/**
 * Make any changes you need to make to the database here
 */
async function up() {
  await mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
  await Person.insertMany([...Array.from({ length: 35 }, () => createRandomPerson())]);
  // await Person.create(createRandomPerson());
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  //await Person.deleteMany();
}

module.exports = { up, down };
