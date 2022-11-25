const { Schema, model } = require('mongoose');

const subjectSchema = Schema({
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

module.exports = model('Subject', subjectSchema);
