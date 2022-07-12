const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/Images', express.static('./Images'));
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
const followers = require('./routes/followersRoute');

app.use('/healthcheck', healthcheck);
app.use('/test', test);
app.use('/account', account);
app.use('/user', user);
app.use('/review', review);
app.use('/favorites', favorites);
app.use('/friends', followers);
app.use('/image', followers);

module.exports = app;
