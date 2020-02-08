const express = require('express');
const router = express.Router();

const meetingController = require('../controllers/meetingController');

router.post('/', meetingController.log, meetingController.createMeeting);
router.get(
  '/list/:id',
  meetingController.log,
  meetingController.getMeetingsList
);

router.get('/:id', meetingController.log, meetingController.getMeetingDetails);

router.put('/:id', meetingController.log, meetingController.updateMeeting);

router.delete('/:id', meetingController.log, meetingController.deleteMeeting);

module.exports = router;
