const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  organiser: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'a meeting must have an organiser']
  },
  participants: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  location: {
    type: String,
    required: [true, 'meeting must have a location']
  },
  time: {
    type: Date,
    required: [true, 'meeting must specify a time']
  },
  createdAt: {
    type: Date,
    default: Date.now()
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
