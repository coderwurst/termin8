// const Meeting = require('../models/meetingModel');

exports.log = (request, response, next) => {
  console.log(`LOG: call from ${request.hostname} to meetingController`);
  next();
};

exports.createMeeting = (request, response, next) => {
  response.status(201).send('NOT IMPLEMENTED: create a Meeting');
  next();
};
exports.getMeetingsList = (request, response, next) => {
  response
    .status(200)
    .send(
      'NOT IMPLEMENTED: List all meetings for a user with id: ' +
        request.params.id
    );
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
