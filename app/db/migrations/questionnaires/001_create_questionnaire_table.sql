CREATE TABLE questionnaire (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    calculated_mark DECIMAL,
    real_mark DECIMAL NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    question_text TEXT
);

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    answer_text TEXT,
    weight DECIMAL,
    question_id INTEGER,
    FOREIGN KEY (question_id) REFERENCES questions(id)
);
