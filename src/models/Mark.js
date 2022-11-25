const { Schema, model } = require('mongoose');

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

module.exports = model('Mark', markSchema);
