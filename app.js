// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from the server side');
});

module.exports = app;
