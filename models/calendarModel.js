const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
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

const Calendar = new mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;
