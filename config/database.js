const { Client } = require('pg');
require('dotenv').config();

const connection = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);

module.exports = knex;
//module.exports = connection;
