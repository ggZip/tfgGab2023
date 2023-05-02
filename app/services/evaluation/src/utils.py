from models import Answer

def calculate_mark(answer_ids):
    total_weight = 0

    for answer_id in answer_ids:
        answer = Answer.query.filter_by(id=answer_id).first()
        if answer:
            total_weight += answer.weight

    return total_weight
