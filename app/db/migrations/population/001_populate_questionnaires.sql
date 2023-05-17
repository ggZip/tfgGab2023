-- Pregunta 1
INSERT INTO questions (question_text) VALUES ('¿Cuánto tiempo le has dedicado o le vas a dedicar en total al estudio de este examen?');
INSERT INTO answers (answer_text, weight, question_id) VALUES ('0 horas', 0, 1);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Entre 1 y 15 horas', 5, 1);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Entre 16 y 30 horas', 10, 1);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Entre 31 y 60 horas', 15, 1);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Más de 60 horas', 20, 1);

-- Pregunta 2
INSERT INTO questions (question_text) VALUES ('¿Cómo calificarías tu nivel de comprensión del material a examinar en una escala de 1 a 5?, siendo 1 "no lo comprendo" y 5 "lo comprendo perfectamente"');
INSERT INTO answers (answer_text, weight, question_id) VALUES ('1', 0, 2);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('2', 4, 2);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('3', 8, 2);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('4', 11, 2);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('5', 15, 2);

-- Pregunta 3
INSERT INTO questions (question_text) VALUES ('¿Cómo definirías tu entorno de estudio habitual?');
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Pésimo', 0, 3);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Malo', 4, 3);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Mejorable', 8, 3);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Bueno', 11, 3);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Perfecto', 15, 3);

-- Pregunta 4
INSERT INTO questions (question_text) VALUES ('¿Cuántas horas diarias duermes en promedio durante la semana antes del examen?');
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Menos de 4 horas diarias', 0, 4);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('De 4 a 6 horas diarias', 5, 4);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('De 6 a 8 horas diarias', 10, 4);

-- Pregunta 5
INSERT INTO questions (question_text) VALUES ('¿Cómo te sientes habitualmente antes o durante un examen?');
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Me quedo en blanco', 0, 5);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Nervioso pero es temporal', 3, 5);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Tranquilo', 5, 5);

-- Pregunta 6
INSERT INTO questions (question_text) VALUES ('¿Qué formato tendrá el examen?');
INSERT INTO answers (answer_text, weight, question_id) VALUES ('No lo sé', 0, 6);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('De desarrollo', 2, 6);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Test y desarrollo', 3, 6);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Tipo test', 5, 6);

-- Pregunta 7
INSERT INTO questions (question_text) VALUES ('¿Qué nivel de satisfacción tienes con respecto a los materiales de estudio o recursos proporcionados por el instructor o el administrador del examen?');
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Nada satisfecho', 0, 7);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Poco satisfecho', 3, 7);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Satisfecho', 7, 7);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('Muy satisfecho', 10, 7);

-- Pregunta 8
INSERT INTO questions (question_text) VALUES ('¿De los temas o conceptos que se cubrirán en el examen, que porcentaje considerarías cubierto con lo que has estudiado/estudiarás?');
INSERT INTO answers (answer_text, weight, question_id) VALUES ('0%', 0, 8);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('25%', 5, 8);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('50%', 10, 8);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('75%', 15, 8);
INSERT INTO answers (answer_text, weight, question_id) VALUES ('100%', 20, 8);


