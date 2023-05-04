const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Encriptación de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await db.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username,  email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
