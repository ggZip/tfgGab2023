from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserQuestionAnswer(db.Model):
    __tablename__ = "user_questions_answers"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    question_id = db.Column(db.Integer, db.ForeignKey("questions.id"))
    answer_id = db.Column(db.Integer, db.ForeignKey("answers.id"))
    calculated_mark = db.Column(db.Float)
    real_mark = db.Column(db.Float, nullable=True)

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