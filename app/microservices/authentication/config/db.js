const { Pool } = require('pg');
const connectionString = 'postgresql://gabuntu:gabuntuPassword@localhost/mydb';

const pool = new Pool({
  connectionString,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
