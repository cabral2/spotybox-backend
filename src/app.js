const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// Set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

//Load Routes
const healthcheck = require('./routes/healthcheck');
const test = require('./routes/testRoute');
const account = require('./routes/accountRoute');
const user = require('./routes/userRoute');
const review = require('./routes/reviewRoute');
const favorites = require('./routes/favoritesRoute');

app.use('/healthcheck', healthcheck);
app.use('/test', test);
app.use('/account', account);
app.use('/user', user);
app.use('/review', review);
app.use('/favorites', favorites);

module.exports = app;
