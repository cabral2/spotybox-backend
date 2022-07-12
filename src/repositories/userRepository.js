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

exports.saveUser = async (user) => {
  await knex.insert({ ...user }).into('users');
};

exports.getUserByEmail = async (email) => {
  const users = await knex('users')
    .where({
      email: email,
    })
    .select();

  return users;
};

exports.updateUser = async (user) => {
  await knex('users')
    .where({
      id: user.id,
    })
    .update(user);
};
exports.setProfilePhoto = async (url, userId) => {
  return knex('users').where({ id: userId }).update({ 'photo-url': url });
};

exports.searchUser = async (data) => {
  const users = await knex('users')
    .whereILike('first_name', `%${data}%`)
    .orWhereILike('last_name', `%${data}%`)
    .select('users.first_name', 'users.last_name', 'users.id', 'users.email');
  return users;
};
