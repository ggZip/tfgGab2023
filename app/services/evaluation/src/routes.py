from flask import request, jsonify
from models import db, UserQuestionAnswer
from utils import calculate_mark

def register_routes(app):
    @app.route("/evaluate", methods=["POST"])
    def evaluate():

        user_answers = request.get_json()

        answer_ids = [user_answer["answer_id"] for user_answer in user_answers]

        calculated_mark = calculate_mark(answer_ids)

        for user_answer in user_answers:
            user_id = user_answer["user_id"]
            question_id = user_answer["question_id"]
            answer_id = user_answer["answer_id"]

            user_question_answer = UserQuestionAnswer(
                user_id=user_id,
                question_id=question_id,
                answer_id=answer_id,
                calculated_mark=calculated_mark,
            )

            db.session.add(user_question_answer)

        db.session.commit()

        return jsonify({"calculated_mark": calculated_mark})
