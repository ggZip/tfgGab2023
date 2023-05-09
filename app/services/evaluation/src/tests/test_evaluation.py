from flask import Flask
from commons.models import db
from commons.models import Questionnaire
from commons.utils import create_questionnaire, calculate_mark, get_user_id, get_answer_ids

def test_calculate_mark():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://evaluation:testpassword@evaluation-db-test:5432/evaluationtestdb'
    db.init_app(app)
    with app.app_context():  
        answer_ids = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
        assert calculate_mark(answer_ids) == 99  

def test_get_user_id():
    user_answers = [{"user_id": 1, "answer_id": 1}]
    assert get_user_id(user_answers) == 1

def test_get_answer_ids():
    user_answers = [{"user_id": 1, "answer_id": 1}]
    assert get_answer_ids(user_answers) == [1]

def test_create_questionnaire():
    user_id = 1
    calculated_mark = 5.0
    questionnaire_name = "Test"
    questionnaire = create_questionnaire(user_id, calculated_mark, questionnaire_name)
    assert isinstance(questionnaire, Questionnaire)
    assert questionnaire.user_id == user_id
    assert questionnaire.calculated_mark == calculated_mark
    assert questionnaire.questionnaire_name == questionnaire_name
