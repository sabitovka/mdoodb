import { Schema, model } from 'mongoose';

const teacherSchema = Schema({
  person: {
    type: Schema.Types.ObjectId,
    ref: 'Person',
  },
  subjects: [{
    type: Schema.Types.ObjectId,
    ref: 'Subject',
  }],
});

export default model('Teacher', teacherSchema);
