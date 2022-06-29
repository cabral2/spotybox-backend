const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Load Routes
const healthcheck = require('./routes/healthcheck');
const test = require('./routes/testRoute');

app.use('/healthcheck', healthcheck);
app.use('/test', test);

module.exports = app;
