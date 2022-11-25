const { Schema, model } = require('mongoose');

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

module.exports = model('Group', groupSchema);
