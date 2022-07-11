const knex = require('../../config/database');

exports.getReviewsByAlbum = async (albumId) => {
  return knex('reviews')
    .where({
      album_id: albumId,
    })
    .select();
};

exports.getReviewsByUser = async (userId) => {
  return knex('reviews')
    .join('users', 'users.id', 'reviews.user_id')
    .where({
      user_id: userId,
    })
    .select();
};

exports.saveReview = async (review) => {
  await knex.insert({ ...review }).into('reviews');
};
