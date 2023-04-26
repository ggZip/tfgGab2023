CREATE TABLE questionnaires (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(255),
    calculated_mark DECIMAL
);

CREATE TABLE user_questionnaires (
    user_id VARCHAR(255),
    questionnaire_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(email),
    FOREIGN KEY (questionnaire_id) REFERENCES questionnaires(id),
    PRIMARY KEY (user_id, questionnaire_id)
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    question_text TEXT,
    questionnaire_id INTEGER,
    FOREIGN KEY (questionnaire_id) REFERENCES questionnaires(id)
);

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    answer_text TEXT,
    weight DECIMAL,
    question_id INTEGER,
    FOREIGN KEY (question_id) REFERENCES questions(id)
);
