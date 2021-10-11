var express = require('express');
var app = express();

// respond with "Date & Time" formated string when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(String(Date().toString()));
  console.log('Time: ', Date().toString());
});

module.exports = app;
