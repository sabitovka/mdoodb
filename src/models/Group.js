import { Schema, model } from 'mongoose';

const groupSchema = Schema({
  name: String,
  speciality: String,
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student',
  }],
  subjects: [{
    type: Schema.Types.ObjectId,
    ref: 'Subject',
  }],
});

export default model('Group', groupSchema);
