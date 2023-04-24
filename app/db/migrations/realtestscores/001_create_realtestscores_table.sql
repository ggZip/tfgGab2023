CREATE TABLE real_test_scores (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    questionnaire_id INTEGER NOT NULL,
    score NUMERIC(5, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (questionnaire_id) REFERENCES questionnaires (id)
);
