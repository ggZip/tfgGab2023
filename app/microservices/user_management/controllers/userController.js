const db = require('../config/db');
const validator = require('validator');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  const { username, role, email, password } = req.body;

  // Validación del correo electrónico
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Encriptación de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await db.query(
      'INSERT INTO users (username, role, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, role, email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
