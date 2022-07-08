const repository = require('../repositories/userRepository');

exports.post = async (req, res, next) => {
  const user = {};

  user.first_name = req.body.first_name;
  user.last_name = req.body.last_name;
  user.bio = req.body.bio;
  user.email = req.body.email;
  user.password = req.body.password;
  user.birth_date = req.body.birth_date;
  user.localization = req.body.localization;
  user.role = req.body.role === undefined ? 'user' : req.body.role;

  const users = await repository.getUserByEmail(user.email);

  if (users.length > 0) {
    res.status(404).send({
      message: 'Email já cadastrado',
    });
    return;
  }

  try {
    await repository.saveUser(user);
    res.status(201).send({ ...user, password: '' });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao criar usuário',
    });
  }
};
