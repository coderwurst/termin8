const express = require('express');
const calendarRouter = require('./routes/calendarRouter');
const meetingRouter = require('./routes/meetingRouter');
const userRouter = require('./routes/userRouter');

const app = express();

const baseAPI = '/api';

// TODO: allow cors for local development to be revisited before deployment
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// body parser - reading data from body into request.body to 10KB
app.use(express.json({ limit: '10kb' }));

app.use(`${baseAPI}/user`, userRouter);
app.use(`${baseAPI}/meeting`, meetingRouter);
app.use(`${baseAPI}/calendar`, calendarRouter);

module.exports = app;
