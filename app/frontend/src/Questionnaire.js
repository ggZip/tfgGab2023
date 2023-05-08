import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch('http://localhost:8080/api3/questionnaire')
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/user_questionnaires");
  };

  const handleAnswerChange = (questionIndex, answerId) => {
    const newAnswers = answers.slice();
    newAnswers[questionIndex] = answerId;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.some((answer) => answer === null)) {
      setErrorMessage('Faltan preguntas por contestar');
    } else {
      const requestData = answers.map((answerId, index) => ({
        user_id: user.userId,
        question_id: questions[index].id,
        answer_id: answerId,
      }));

      fetch('http://localhost:8080/api4/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      }).then((response) => {
        if (response.ok) {
          response.json().then((responseData) => {
            setMessage(`Tu probabilidad de aprobar es de: ${responseData.calculated_mark}`);
            setShowModal(true);
          });
        } else {
          console.error('Error al enviar el cuestionario');
        }
      });
    }
  };

  return (
    <div className="Questionnaire">
      {questions.map((question, questionIndex) => (
        <div key={question.id} className="question">
          <h3>{question.question_text}</h3>
          {question.answers.map((answer) => (
            <div key={answer.id} className="answer">
              <input
                type="radio"
                id={`answer-${answer.id}`}
                name={`question-${question.id}`}
                value={answer.id}
                onChange={() => handleAnswerChange(questionIndex, answer.id)}
              />
              <label htmlFor={`answer-${answer.id}`}>{answer.answer_text}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="submit-questionnaire-button">Enviar cuestionario</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{message}</h2>
            <button onClick={handleModalClose}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;