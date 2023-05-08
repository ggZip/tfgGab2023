const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
