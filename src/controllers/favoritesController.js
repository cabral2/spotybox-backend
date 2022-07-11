const repository = require('../repositories/favoritesRepository');

exports.getByUser = async (req, res, next) => {
    const albuns = await repository.getFavoritesByUser(req.query.id);
    res.status(200).send(albuns);
}

exports.post = async (req, res, next) => {
    if (!req.body.userId || !req.body.albumId) {
        res.status(404).send({
            message: 'Solicitação inválida',
        });
        return;
    }

    const favorite = {};
    favorite.user_id = req.body.userId;
    favorite.album_id = req.body.albumId;

    try {
        await repository.saveFavorite(favorite);
        res.status(201).send(favorite);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao criar favorite',
        });
    }
};

exports.delete = (req, res, next) => {
    if (!req.body.userId || !req.body.albumId) {
        res.status(404).send({
            message: 'Solicitação inválida',
        });
        return;
    }

    const favorite = {};
    favorite.user_id = req.body.userId;
    favorite.album_id = req.body.albumId;

    try {
        await repository.deleteFavorite(favorite);
        res.status(200).send(favorite);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao deletar favorite',
        });
    }
};
