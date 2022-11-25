const { Schema, model } = require('mongoose');

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

module.exports = model('Teacher', teacherSchema);
