require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: true,
  },
  pool: {
    min: 2,
    max: 10,
  },
  debug: false,
  migrations: {
    tableName: 'knex_migrations',
  },
};
