from flask import request, jsonify
from models import db
from utils import calculate_mark, get_user_id, get_answer_ids, create_questionnaire, create_questionnaire_question_answers

def register_routes(app):
    @app.route("/evaluate", methods=["POST"])
    def evaluate():

        user_answers = request.get_json()

        user_id = get_user_id(user_answers)
        answer_ids = get_answer_ids(user_answers)

        calculated_mark = calculate_mark(answer_ids)

        questionnaire = create_questionnaire(user_id, calculated_mark)

        db.session.add(questionnaire)
        db.session.commit()

        questionnaire_id = questionnaire.id

        questionnaire_question_answers = create_questionnaire_question_answers(
            user_answers, questionnaire_id
        )

        for qqa in questionnaire_question_answers:
            db.session.add(qqa)

        db.session.commit()

        return jsonify({"calculated_mark": calculated_mark})
