const repository = require('../repositories/followersRepository');

exports.postFollower = async (req, res, next) => {
  if (!req.body.user_id || !req.body.friend_id) {
    res.status(404).send({
      message: 'Solicitação inválida',
    });
    return;
  }
  const users = { user_id: req.body.user_id, friend_id: req.body.friend_id };

  try {
    await repository.saveFollow(users);
    res.status(201).send(users);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao seguir usuario.',
    });
  }
};

exports.deleteFollower = async (req, res, next) => {
  if (!req.body.user_id || !req.body.friend_id) {
    res.status(404).send({
      message: 'Solicitação inválida',
    });
    return;
  }

  const users = { user_id: req.body.user_id, friend_id: req.body.friend_id };
  console.log(users);

  try {
    await repository.deleteFollow(users);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao deletar amizade',
    });
  }
};

exports.getFollowing = async (req, res, next) => {
  const users = await repository.getFollowing(req.query);
  const following = { number_following: users.length, users };
  res.status(200).send(following);
};

exports.getFollowers = async (req, res, next) => {
  const users = await repository.getFollowers(req.query);
  const followers = { number_followers: users.length, users };
  console.log(followers);
  res.status(200).send(followers);
};

exports.updateIsBlock = async (req, res, next) => {
  if (!req.body.user_id && !req.body.friend_id && !req.body.isBlock) {
    res.status(404).send({
      message: 'Solicitação inválida',
    });
    return;
  }
  const users = {
    user_id: req.body.user_id,
    friend_id: req.body.friend_id,
    isBlock: req.body.isBlock,
  };
  try {
    await repository.updateIsBlock(users);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao bloquear usuário',
    });
  }
};
