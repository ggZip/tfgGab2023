CREATE TABLE real_mark (
    id SERIAL PRIMARY KEY,
    real_mark DECIMAL,
    questionnaire_id INTEGER,
    FOREIGN KEY (questionnaire_id) REFERENCES questionnaires(id)
);
