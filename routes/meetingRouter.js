const express = require('express');
const router = express.Router();
const controller = '../controllers/meetingController';

router.post('/', (request, response, next) => {
  response.status(201).send('NOT IMPLEMENTED: create a Meeting');
  next();
});

router.get('/list/:id', (request, response, next) => {
  response
    .status(200)
    .send(
      'NOT IMPLEMENTED: List all meetings for a user with id: ' +
        request.params.id
    );
  next();
});

router.get('/:id', (request, response, next) => {
  response
    .status(200)
    .send('NOT IMPLEMENTED: Meeting detail for id: ' + request.params.id);
  next();
});

router.put('/:id', (request, response, next) => {
  response
    .status(200)
    .send(
      'NOT IMPLEMENTED: update a meeting with given id: ' + request.params.id
    );
  next();
});

router.delete('/:id', (request, response, next) => {
  response
    // .status(204)
    .send(
      'NOT IMPLEMENTED: delete the meeting with given id: ' + request.params.id
    );
  next();
});

module.exports = router;
