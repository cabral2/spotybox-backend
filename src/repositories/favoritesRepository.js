const knex = require('../../config/database');

exports.getFavoritesByUser = async (data) => {
  return knex('favorites')
    .where({
      user_id: data.userId,
    })
    .select();
};

exports.getFavoritesByUserAndAlbum = async (data) => {
  return knex('favorites')
    .where({
      user_id: data.user_id,
      album_id: data.album_id,
    })
    .select();
};

exports.saveFavorite = async (favorite) => {
  await knex.insert({ ...favorite }).into('favorites');
};

exports.deleteFavorite = async (favorite) => {
  await knex('favorites')
    .where({
      user_id: favorite.user_id,
      album_id: favorite.album_id,
    })
    .del();
};
