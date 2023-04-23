CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  options TEXT[] NOT NULL,
  correct_answer VARCHAR(255) NOT NULL,
  questionnaire_id INTEGER REFERENCES questionnaires(id) ON DELETE CASCADE
);