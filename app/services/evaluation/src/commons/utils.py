from commons.models import Answer, QuestionnaireQuestionAnswer, Questionnaire
def calculate_mark(answer_ids):
    total_weight = 0

    for answer_id in answer_ids:
        answer = Answer.query.filter_by(id=answer_id).first()
        if answer:
            total_weight += answer.weight

    return total_weight


def get_user_id(user_answers):
    return user_answers[0]["user_id"]


def get_answer_ids(user_answers):
    return [user_answer["answer_id"] for user_answer in user_answers]


def create_questionnaire(user_id, calculated_mark, questionnaire_name): 
    questionnaire = Questionnaire(
        user_id=user_id,
        calculated_mark=calculated_mark,
        questionnaire_name=questionnaire_name, 
    )
    return questionnaire


def create_questionnaire_question_answers(user_answers, questionnaire_id):
    questionnaire_question_answers = []

    for user_answer in user_answers:
        question_id = user_answer["question_id"]
        answer_id = user_answer["answer_id"]

        questionnaire_question_answer = QuestionnaireQuestionAnswer(
            questionnaire_id=questionnaire_id,
            question_id=question_id,
            answer_id=answer_id,
        )
        questionnaire_question_answers.append(questionnaire_question_answer)

    return questionnaire_question_answers