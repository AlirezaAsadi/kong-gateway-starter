'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use((req, res, next) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log('> New  request: ', fullUrl);
  console.log('> headers: ', JSON.stringify(req.headers));

  next();
});

app.get('/v1/test1', (req, res) => {
  res.send('Hello APi Academy Lovers! This is page #1');
});

app.get('/v1/test2', (req, res) => {
  res.send('Hello APi Academy Lovers! This is page #2');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);