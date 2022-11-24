import { Schema, model } from 'mongoose';

const studentSchema = Schema({
  name: String,
  teachers: [{
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
  }],
  groups: [{
    type: Schema.Types.ObjectId,
    ref: 'Group',
  }],
});

export default model('Student', studentSchema);
