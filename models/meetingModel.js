const mongoose = require('mongoose');
const moment = require('moment');

const meetingSchema = new mongoose.Schema({
  participants: [String],
  location: {
    type: String,
    required: [true, 'meeting must have a location']
  },
  time: {
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

/*meetingSchema.pre(/^find/, function(next) {
  this.populate('organiser');
  next();
});*/

const Meeting = new mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
