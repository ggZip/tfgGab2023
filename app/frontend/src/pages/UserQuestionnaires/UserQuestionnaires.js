import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import "./UserQuestionnaires.css";

const UserQuestionnaires = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [realMarks, setRealMarks] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchQuestionnaires = async () => {
    const response = await fetch(`http://localhost:8080/api3/questionnaire/user/${user.userId}`);
    const data = await response.json();
    setQuestionnaires(data);
  };

  useEffect(() => {
    fetchQuestionnaires();
  }, [user]);

  const handleSubmit = async (questionnaireId) => {
    const realMark = realMarks[questionnaireId];

    if (realMark === undefined || isNaN(realMark) || realMark < 0 || realMark > 10) {
      setError('Por favor, introduce una nota válida entre 0 y 10');
      return;
    }

    await fetch("http://localhost:8080/api5/update_real_mark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionnaire_id: questionnaireId,
        real_mark: realMark,
      }),
    });

    setShowModal(prevState => ({ ...prevState, [questionnaireId]: true }));
  };

  const closeModal = (questionnaireId) => {
    setShowModal(prevState => ({ ...prevState, [questionnaireId]: false }));
    fetchQuestionnaires();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handleInputChange = (questionnaireId, value) => {
    setError('');
    setRealMarks((prevRealMarks) => ({
      ...prevRealMarks,
      [questionnaireId]: parseFloat(value),
    }));
  };

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="UserQuestionnaires">
      {questionnaires.length === 0 ? (
        <div>
          <p className="no-questionnaires-message">Aún no se han realizado cuestionarios</p>
          <button onClick={handleGoBack}>Volver a la página principal</button>
        </div>
      ) : (
        <div className="questionnaire-list">
          {questionnaires.map((q) => (
            <div key={q.id} className="questionnaire-item">
              <div>{q.questionnaire_name}</div>
              <div>Realizado el: {formatDate(q.created_at)}</div>
              <div>Probabilidad de aprobar: {q.calculated_mark}%</div>
              <div className="real-mark">
                {q.real_mark !== null ? (
                  <div>Nota real: {q.real_mark}</div>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Nota real"
                      className="real-mark-input"
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                    />
                    <button onClick={() => handleSubmit(q.id)}>
                      Enviar nota
                    </button>
                    {error
                      ? <div className="error-message">{error}</div>
                      : (showModal[q.id] && (
                        <div className="modal">
                          <div className="modal-content">
                            <p>Gracias por el feedback</p>
                            <button onClick={closeModal}>De nada</button>
                          </div>
                        </div>
                      ))
                    }
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserQuestionnaires;
