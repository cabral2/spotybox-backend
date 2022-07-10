const knex = require('../../config/database');

exports.getReviewsByAlbum = async (data) => {
  return knex('reviews')
    .where({
      album_id: data.albumId,
    })
    .select();
};

exports.getReviewsByUser = async (data) => {
  return knex('reviews')
    .where({
      user_id: data.userId,
    })
    .select();
};

exports.saveReview = async (review) => {
  await knex.insert({ ...review }).into('reviews');
};
