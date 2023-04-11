const express = require('express');

module.exports = function (app) {
  // enable static file serving
  app.use(express.static());
  // parse json request data
  app.use(express.json());
  // compression if in production
  if (process.env.NODE_ENV === 'production') {
    app.use(compression());
  }
}