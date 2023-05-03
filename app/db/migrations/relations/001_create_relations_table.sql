CREATE TABLE questionnaire_questions_answers (
    id SERIAL PRIMARY KEY,
    questionnaire_id INTEGER,
    question_id INTEGER,
    answer_id INTEGER,
    FOREIGN KEY (questionnaire_id) REFERENCES questionnaire(id),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (answer_id) REFERENCES answers(id)
);

CREATE INDEX questionnaire_questions_answers_questionnaire_id_idx ON questionnaire_questions_answers(questionnaire_id);
CREATE INDEX questionnaire_questions_answers_question_id_idx ON questionnaire_questions_answers(question_id);
CREATE INDEX questionnaire_questions_answers_answer_id_idx ON questionnaire_questions_answers(answer_id);
