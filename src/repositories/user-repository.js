const knex = require('../../config/database');

exports.getUser = async (data) => {
  const user = await knex('users')
    .where({
      email: data.email,
      password: data.password,
    })
    .select();

  return user[0];
};
