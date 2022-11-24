import { Schema, model } from 'mongoose';

const personSchema = Schema({
  firstname: String,
  lastname: String,
  middlename: String,
  birthday: Date,
});

export default model('Person', personSchema);
