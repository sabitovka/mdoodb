const { Schema, model } = require('mongoose');

const groupSchema = Schema({
  name: {
    type: String,
    validate: {
      validator: (v) => /[А-Яа-я]+-\d+/gm.test(v),
      message: (props) => `${props.value} не соответсвует шаблону названия группы`,
    },
    reqiured: [true, 'Название группы обязательно'],
  },
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
