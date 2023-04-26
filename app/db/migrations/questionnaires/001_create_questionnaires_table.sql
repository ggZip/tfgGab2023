CREATE TABLE questionnaires (
    id SERIAL PRIMARY KEY,
    creator_id VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    FOREIGN KEY (creator_id) REFERENCES users (email)
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    questionnaire_id INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    FOREIGN KEY (questionnaire_id) REFERENCES questionnaires (id)
);
