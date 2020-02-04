const app = require('./app');

const port = 8080;

app.get(`/api/`, (req, res, next) => {
  console.log(`get recieved from ${req.url}`);
  res.send('Hello from termin8 - all healthy here');
  next();
});

app.listen(port, () => console.log(`termin8 listening on port ${port}!`));
