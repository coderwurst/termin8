const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Meeting = require('../models/meetingModel');
const User = require('../models/userModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'));

// read data and parse into an array of JS objects
const meetings = JSON.parse(
  fs.readFileSync(`${__dirname}/meetings.json`, 'utf8')
);

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf8'));

// import to DB
const importData = async () => {
  try {
    await Meeting.create(meetings);
    await User.create(users);
    console.log('data successfully loaded');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// delete from DB
const deleteData = async () => {
  try {
    await Meeting.deleteMany();
    await User.deleteMany();
    console.log('data successfully deleted');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

// node dev-data/import-dev-data.js --import
// node dev-data/import-dev-data.js --delete
