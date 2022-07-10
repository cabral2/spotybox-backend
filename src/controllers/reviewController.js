const repository = require('../repositories/reviewRepository');

exports.post = async (req, res, next) => {
  if (!req.body.userId || !req.body.albumId || !req.body.review) {
    res.status(404).send({
      message: 'Solicitação inválida',
    });
    return;
  }

  const review = {};
  review.user_id = req.body.userId;
  review.album_id = req.body.albumId;
  review.review = req.body.review;

  try {
    await repository.saveReview(review);
    res.status(201).send(review);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao criar review',
    });
  }
};
