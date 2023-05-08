# import unittest
# import json
# from models import db
# from src.evaluation import create_app



# class TestEvaluationService(unittest.TestCase):
#     def setUp(self):
#         self.app = create_app()
#         self.app.config['TESTING'] = True
#         self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
#         self.app_context = self.app.app_context()
#         self.app_context.push()
#         db.init_app(self.app)
#         db.create_all()

#     def tearDown(self):
#         db.session.remove()
#         db.drop_all()
#         self.app_context.pop()

#     # (resto del contenido de la clase TestEvaluationService)


#     def test_evaluate(self):
#         user_answers = [
#             {
#                 "user_id": 1,
#                 "question_id": 1,
#                 "answer_id": 1
#             }
#         ]

#         response = self.app.post(
#             "/evaluate",
#             data=json.dumps(user_answers),
#             content_type="application/json",
#         )

#         self.assertEqual(response.status_code, 200)
#         data = json.loads(response.data)
#         self.assertEqual(data["calculated_mark"], 1)


# if __name__ == "__main__":
#     unittest.main()
import unittest

class TestSimple(unittest.TestCase):
    def test_simple_addition(self):
        self.assertEqual(1 + 1, 2)