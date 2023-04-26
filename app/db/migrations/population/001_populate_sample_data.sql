INSERT INTO questionnaires (subject, calculated_mark) VALUES
    ('Matemáticas', 85),
    ('Física', 78),
    ('Química', 92);

INSERT INTO questions (question_text, questionnaire_id) VALUES
    ('¿Cuál es el resultado de 1+1?', 1),
    ('¿Cuál es la velocidad de la luz en el vacío?', 2),
    ('¿Cuál es el símbolo químico del agua?', 3);
    
INSERT INTO answers (answer_text, weight, question_id) VALUES
    ('0', 0, 1),
    ('1', 0, 1),
    ('2', 1, 1),
    ('3', 0, 1),
    ('299,792 km/s', 1, 2),
    ('3,000,000 km/s', 0, 2),
    ('H2O', 1, 3),
    ('NaCl', 0, 3);
