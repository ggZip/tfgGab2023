from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class QuestionnaireQuestionAnswer(db.Model):
    __tablename__ = "questionnaire_questions_answers"
    id = db.Column(db.Integer, primary_key=True)
    questionnaire_id = db.Column(db.Integer, db.ForeignKey("questionnaire.id"))
    question_id = db.Column(db.Integer, db.ForeignKey("questions.id"))
    answer_id = db.Column(db.Integer, db.ForeignKey("answers.id"))

class Answer(db.Model):
    __tablename__ = "answers"
    id = db.Column(db.Integer, primary_key=True)
    answer_text = db.Column(db.Text)
    weight = db.Column(db.Numeric)
    question_id = db.Column(db.Integer, db.ForeignKey("questions.id"))

class Question(db.Model):
    __tablename__ = "questions"
    id = db.Column(db.Integer, primary_key=True)
    question_text = db.Column(db.Text)

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

class Questionnaire(db.Model):
    __tablename__ = "questionnaire"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    questionnaire_name = db.Column(db.String(255), nullable=False)
    calculated_mark = db.Column(db.Float)
    real_mark = db.Column(db.Float, nullable=True)