import React, { useState, useEffect } from 'react';

const UserQuestionnaires = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [realMark, setRealMark] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api3/questionnaire/user/1')
      .then((response) => response.json())
      .then((data) => setQuestionnaires(data));
  }, []);

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar la nota cuando se implemente
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="UserQuestionnaires">
      {questionnaires.length === 0 ? (
        <p>No se han realizado cuestionarios</p>
    ) : (
        <div className="questionnaire-list">
          {questionnaires.map((q) => (
            <div key={q.id} className="questionnaire-item">
              <div>Realizado el: {formatDate(q.created_at)}</div>
              <div>Probabilidad de aprobar: {q.calculated_mark}</div>
              <div className="real-mark">
                {q.real_mark !== null ? (
                  <div>Nota real: {q.real_mark}</div>
                ) : (
                  <>
                    <input type="text" placeholder="Nota real" />
                    <button>Enviar nota</button>
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
