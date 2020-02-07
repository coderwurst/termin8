const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', error => {
  console.log(`ERROR: ${error.name}, ${error.message}, ${error.stack}`);
  console.log('Uncaught Exception Error! Shutting down...');
  process.exit(1);
});

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
  .then(() => {
    console.log('DB connection successful');
  });

const app = require('./app');

const port = 8080;

app.get(`/api/`, (req, res, next) => {
  console.log(`get recieved from ${req.url}`);
  res.send('Hello from termin8 - all healthy here');
  next();
});

app.listen(port, () => console.log(`termin8 listening on port ${port}!`));
