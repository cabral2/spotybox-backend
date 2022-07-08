const userRepository = require('../repositories/user-repository');
const authService = require('../services/auth-service');

exports.authenticate = async (req, res, next) => {
  try {
    const user = await userRepository.getUser({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      res.status(404).send({
        message: 'Usuário ou senha inválidos.',
      });
      return;
    }

    const token = await authService.generateToken({
      email: user.email,
      name: user.name,
      role: user.role,
    });

    res.status(200).send({
      token: token,
      data: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição',
    });
  }
};
