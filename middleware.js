const express = require('express');
const cors = require('cors');
const compression = require('compression');

module.exports = function (app) {
  // enable static file serving
  app.use(express.static('public'));
  // parse json request data
  app.use(express.json());
  app.use(cors());
  // compression if in production
  if (process.env.NODE_ENV === 'production') {
    app.use(compression());
  }
}