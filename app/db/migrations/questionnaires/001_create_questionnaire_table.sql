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
