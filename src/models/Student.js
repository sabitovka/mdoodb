const { Schema, model } = require('mongoose');

const studentSchema = Schema({
  person: {
    type: Schema.Types.ObjectId,
    ref: 'Person',
  },
  acceptDate: Date,
  expDate: Date,
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
  marks: [{
    type: Schema.Types.ObjectId,
    ref: 'Mark ',
  }],
});

module.exports = model('Student', studentSchema);