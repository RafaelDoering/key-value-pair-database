const express = require('express');
const app = express();
const port = 3000;

const database = require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/store', function (req, res) {
  const { key, value } = req.body;

  return res.send(database.create(key, value));
});

app.get('/store/:key', function (req, res) {
  const key = req.params.key;

  return res.send(database.find(key));
});

app.get('/store', function (req, res) {
  return res.send(database.findAll());
});

app.delete('/store/:key', function (req, res) {
  const key = req.params.key;

  return res.send(database.remove(key));
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
