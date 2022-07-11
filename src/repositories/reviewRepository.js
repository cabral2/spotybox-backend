const knex = require('../../config/database');

exports.getReviewsByAlbum = async (albumId) => {
  return knex('reviews')
    .join('users', 'users.id', 'reviews.user_id')
    .where({
      album_id: albumId,
    })
    .orderBy('id', 'desc')
    .select();
};

exports.getReviewsByUser = async (userId) => {
  return knex('reviews')
    .join('users', 'users.id', 'reviews.user_id')
    .where({
      user_id: userId,
    })
    .orderBy('id', 'desc')
    .select();
};

exports.saveReview = async (review) => {
  await knex.insert({ ...review }).into('reviews');
};
