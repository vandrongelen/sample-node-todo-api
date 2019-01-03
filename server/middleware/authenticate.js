const { User } = require('./../models/user');

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  // eslint-disable-next-line consistent-return
  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = { authenticate };
