const validator = require('validator');

const validateUserData = (req, res, next) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
};

module.exports = {
  validateUserData,
};
