CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  questionnaire_id INTEGER REFERENCES questionnaires(id) ON DELETE CASCADE,
  pass_probability NUMERIC(5, 2) NOT NULL
);