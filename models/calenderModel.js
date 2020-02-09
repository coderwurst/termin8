const mongoose = require('mongoose');

const calenderSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'a meeting must have an owner']
  },
  meetings: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Meeting'
    }
  ]
});

const Calender = new mongoose.model('Calender', calenderSchema);

module.exports = Calender;
