const mongoose = require('mongoose');
const moment = require('moment');

const meetingSchema = new mongoose.Schema({
  organiser: {
    type: String, // mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'a meeting must have an organiser']
  },
  participants: [String],
  location: {
    type: String,
    required: [true, 'meeting must have a location']
  },
  date: {
    type: Date,
    required: [true, 'meeting must specify a time']
  },
  duration: {
    type: String,
    enum: {
      values: ['15', '30', '45', '60'],
      message: 'the duration can be on 15min intervals, up to 1 hour'
    }
  },
  createdAt: {
    type: Date,
    default: moment()
  },
  confirmed: {
    type: Boolean,
    default: false
  }
});

meetingSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'organiser',
    select: 'name'
  });

  next();
});

const Meeting = new mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
