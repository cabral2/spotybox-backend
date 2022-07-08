const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
  return jwt.sign(data, process.env.SALT_KEY, { expiresIn: '1d' });
};

exports.decodeToken = async (token) => {
  const data = await jwt.verify(token, process.env.SALT_KEY);
  return data;
};

exports.authorize = function (req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, process.env.SALT_KEY, function (error, decoded) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido',
        });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({
      message: 'Acesso Restrito',
    });
  }
};

exports.isAdmin = function (req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401).json({
      message: 'Token Inválido',
    });
  } else {
    jwt.verify(token, process.env.SALT_KEY, function (error, decoded) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido',
        });
      } else {
        if (decoded.role.includes('admin')) {
          next();
        } else {
          res.status(403).json({
            message: 'Acesso negado',
          });
        }
      }
    });
  }
};
