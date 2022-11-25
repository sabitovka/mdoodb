const { Schema, model } = require('mongoose');

const personSchema = Schema({
  firstname: String,
  lastname: String,
  middlename: String,
  birthday: Date,
});

module.exports = model('Person', personSchema);
