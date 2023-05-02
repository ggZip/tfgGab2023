CREATE TABLE user_questions_answers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    question_id INTEGER,
    answer_id INTEGER,
    calculated_mark DECIMAL,
    real_mark DECIMAL NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (answer_id) REFERENCES answers(id)
);

CREATE INDEX user_questions_answers_user_id_idx ON user_questions_answers(user_id);
CREATE INDEX user_questions_answers_question_id_idx ON user_questions_answers(question_id);
CREATE INDEX user_questions_answers_answer_id_idx ON user_questions_answers(answer_id);
