const express = require('express');

// create server app
const app = express();
// add middleware
require('./middleware')(app);
// add database connection
// require('./db');
// add routes
// require('./routes')(app);

module.exports = app;
