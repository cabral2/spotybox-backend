const knex = require('../../config/database');

exports.saveFollow = async (users) => {
  await knex.insert(users).into('friends');
};

exports.deleteFollow = async (users) => {
  await knex('friends').where(users).del();
};

exports.getFollowing = async (user) => {
  return knex('friends')
    .innerJoin('users', 'friends.friend_id', 'users.id')
    .where({ user_id: user.user_id })
    .select(
      'friends.user_id',
      'friends.friend_id',
      'friends.isBlock',
      'users.first_name',
      'users.last_name',
      'users.bio',
      'users.localization',
      'users.photo-url'
    );
};

exports.getFollowers = async (user) => {
  return knex('friends')
    .innerJoin('users', 'friends.user_id', 'users.id')
    .where({ friend_id: user.user_id })
    .select(
      'friends.user_id',
      'friends.friend_id',
      'friends.isBlock',
      'users.first_name',
      'users.last_name',
      'users.bio',
      'users.localization',
      'users.photo-url'
    );
};

exports.updateIsBlock = async (users) => {
  await knex('friends')
    .where({ friend_id: users.user_id, user_id: users.friend_id })
    .update({ isBlock: users.isBlock });
};
