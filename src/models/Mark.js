import { Schema, model } from 'mongoose';

const markSchema = Schema({
  value: Number,
  date: Date,
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
  },
});

export default model('Mark', markSchema);
