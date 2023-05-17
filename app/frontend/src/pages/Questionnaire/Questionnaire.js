import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Questionnaire.css";
const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(8).fill(null));
  const [questionnaireName, setQuestionnaireName] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/api3/questionnaire')
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/user_questionnaires");
  };

  const handleAnswerChange = (questionIndex, answerId) => {
    setAnswers(prevAnswers => {
      return prevAnswers.map((answer, index) => {
        if (index === questionIndex) {
          return answer === answerId ? null : answerId;
        } else {
          return answer;
        }
      });
    });
  };

  const handleQuestionnaireNameChange = (event) => {
    setQuestionnaireName(event.target.value);
  };

  const handleSubmit = () => {
    if (!questionnaireName.trim()) {
      setErrorMessage('Falta el nombre del cuestionario');
    } else if (answers.some((answer) => answer === null)) {
      setErrorMessage('Faltan preguntas por contestar');
    } else {
      const requestData = {
        questionnaire_name: questionnaireName,
        answers: answers.map((answerId, index) => ({
          user_id: user.userId,
          question_id: questions[index].id,
          answer_id: answerId,
        })),
      };

      fetch('http://localhost:8080/api4/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      }).then((response) => {
        if (response.ok) {
          response.json().then((responseData) => {
            setMessage(`Tu probabilidad de aprobar es del ${responseData.calculated_mark}%`);
            setShowModal(true);
          });
        } else {
          console.error('Error al enviar el cuestionario');
        }
      });
    }
  };
  const handleGoBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="Questionnaire">
      <input
        type="text"
        className="questionnaire-name-input"
        placeholder="Introduce el nombre del cuestionario"
        value={questionnaireName}
        onChange={handleQuestionnaireNameChange}
      />
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>
      {questions.length > 0 && (
        <div key={questions[currentQuestion].id} className="question">
          <h3>{questions[currentQuestion].question_text}</h3>
          {questions[currentQuestion].answers.map((answer) => (
            <div key={answer.id} className="answer">
              <input
                type="radio"
                id={`answer-${answer.id}`}
                name={`question-${questions[currentQuestion].id}`}
                value={answer.id}
                checked={answers[currentQuestion] === answer.id}
                onChange={() => handleAnswerChange(currentQuestion, answer.id)}
              />
              <label htmlFor={`answer-${answer.id}`}>{answer.answer_text}</label>
            </div>
          ))}
        </div>
      )}
      <div className="question-navigation">
        <button onClick={handlePrev} disabled={currentQuestion === 0}>
          Anterior
        </button>
        <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
          Siguiente
        </button>
      </div>
      {currentQuestion === questions.length - 1 && (
        <button onClick={handleSubmit} className="submit-questionnaire-button">
          Enviar cuestionario
        </button>
      )}
      <button onClick={handleGoBack} className="cancel-questionnaire-button">
        Cancelar
      </button>
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