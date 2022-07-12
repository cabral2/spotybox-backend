const knex = require('../../config/database');

exports.saveFollow = async (users) => {
  await knex.insert(users).into('friends');
};

exports.deleteFollow = async (users) => {
  await knex('friends').where(users).del();
};

exports.getFollowing = async (user) => {
  return knex('friends').where({ user_id: user.user_id }).select();
};

exports.getFollowers = async (user) => {
  return knex('friends').where({ friend_id: user.user_id }).select();
};

exports.updateIsBlock = async (users) => {
  await knex('friends')
    .where({ friend_id: users.user_id, user_id: users.friend_id })
    .update({ isBlock: users.isBlock });
};
