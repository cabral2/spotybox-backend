const knex = require('../../config/database');


exports.getFavoritesByUser = async (data) => {
    return knex('favorites')
        .where({
            user_id: data.userId,
        })
        .select();
};

exports.saveFavorite = async (favorite) => {
    await knex.insert({ ...favorite }).into('favorites');
};

exports.deleteFavorite = async (favorite) => {
    await knex('favorites')
        .where({
            user_id: favorite.userId,
            album_id: favorite.albumId,
        })
        .del();
}
