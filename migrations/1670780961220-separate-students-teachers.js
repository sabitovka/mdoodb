const { faker } = require('@faker-js/faker');
const { default: mongoose } = require('mongoose');
const {
  Person, Teacher, Student, Group,
} = require('../src/models');
const config = require('../src/config');

function createRandomGroup() {
  return faker.helpers.replaceSymbols('???-**');
}

/**
 * Make any changes you need to make to the database here
 */
async function up() {
  await mongoose.connect(config.db.url);

  const persons = await Person.find({}, 'id birthday').exec();

  const people = [[], []];

  persons.forEach((person, index) => {
    people[index % 2].push({ person: { _id: person.id } });
  });

  await Teacher.insertMany(people[0]);
  await Student.insertMany(people[1].map(((student) => ({
    ...student, group: new Group({ name: createRandomGroup() }),
  }))));
  throw new Error();
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  await mongoose.connect(config.db.url);

  await Teacher.deleteMany();
  await Student.deleteMany();
}

module.exports = { up, down };
