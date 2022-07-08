const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Load Routes
const healthcheck = require('./routes/healthcheck');
const test = require('./routes/testRoute');
const account = require('./routes/accountRoute');

app.use('/healthcheck', healthcheck);
app.use('/test', test);
app.use('/account', account);

module.exports = app;
