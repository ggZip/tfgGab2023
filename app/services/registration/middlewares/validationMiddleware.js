const validator = require('validator');

const validateUserData = (req, res, next) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Formato de email no válido' });
  }

  next();
};

module.exports = {
  validateUserData,
};
