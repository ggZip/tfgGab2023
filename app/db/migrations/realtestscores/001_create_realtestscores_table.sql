CREATE TABLE real_test_scores (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    questionnaire_id INTEGER NOT NULL,
    score NUMERIC(5, 2),
    FOREIGN KEY (user_id) REFERENCES users (email),
    FOREIGN KEY (questionnaire_id) REFERENCES questionnaires (id)
);
