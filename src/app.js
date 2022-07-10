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
const user = require('./routes/userRoute');
const review = require('./routes/reviewRoute');

app.use('/healthcheck', healthcheck);
app.use('/test', test);
app.use('/account', account);
app.use('/user', user);
app.use('/review', review);

module.exports = app;
