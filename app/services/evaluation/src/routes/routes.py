from flask import request, jsonify
from commons.models import db
from commons.utils import calculate_mark, get_user_id, get_answer_ids, create_questionnaire, create_questionnaire_question_answers
def register_routes(app):
    @app.route("/evaluate", methods=["POST"])
    def evaluate():

        data = request.get_json()

        user_answers = data['answers']
        questionnaire_name = data['questionnaire_name']

        user_id = get_user_id(user_answers)
        answer_ids = get_answer_ids(user_answers)

        calculated_mark = calculate_mark(answer_ids)

        questionnaire = create_questionnaire(user_id, calculated_mark, questionnaire_name) 

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
