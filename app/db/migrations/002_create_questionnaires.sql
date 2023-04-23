CREATE TABLE questionnaires (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);