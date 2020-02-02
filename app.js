const express = require('express');

const app = express();
const port = 8080;

// TODO: allow cors for local development to be revisited before deployment
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res, next) => {
  console.log(`get recieved from ${req.url}`);
  res.send('Hello from termin8!');
  next();
});

app.listen(port, () => console.log(`termin8 listening on port ${port}!`));
