const Meeting = require('../models/meetingModel');
const User = require('../models/userModel');
const Calendar = require('../models/calendarModel');

exports.log = (request, response, next) => {
  console.log(
    `LOG: call from ${request.hostname} \n body: ${JSON.stringify(
      request.body
    )} \n params ${JSON.stringify(request.params)} \n-> to meetingController ${
      request.path
    }`
  );
  next();
};

exports.createMeeting = async (request, response, next) => {
  const doc = await Meeting.create(request.body);
  response.status(201).json({
    status: 'create success',
    data: {
      data: doc
    }
  });
  next();
};

exports.getMeetingsList = async (request, response, next) => {
  const user = await User.findById(request.params.id);
  const calendar = await Calendar.findById(user.calendar);
  let meetings = [];

  for (const meeting of calendar.meetings) {
    const meetingDetails = await Meeting.findById(meeting);
    meetings.push(meetingDetails);
  }

  response.status(200).json({
    status: 'list of meetings found',
    data: {
      user: user,
      calendar: calendar,
      meetings: meetings
    }
  });
  next();
};

exports.getMeetingDetails = (request, response, next) => {
  response
    .status(200)
    .send('NOT IMPLEMENTED: Meeting detail for id: ' + request.params.id);
  next();
};

exports.updateMeeting = (request, response, next) => {
  response
    .status(200)
    .send(
      'NOT IMPLEMENTED: update a meeting with given id: ' + request.params.id
    );
  next();
};

exports.deleteMeeting = (request, response, next) => {
  response
    // TODO: add back in .status(204)
    .send(
      'NOT IMPLEMENTED: delete the meeting with given id: ' + request.params.id
    );
  next();
};
