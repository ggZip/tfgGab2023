import React, { useState } from "react";

function Questionnaire() {
  const [questions, setQuestions] = useState([    {      id: 1,      question: "¿Cuál es tu color favorito?",      options: ["Rojo", "Azul", "Verde", "Amarillo"],
    },
    {
      id: 2,
      question: "¿Cuál es tu animal favorito?",
      options: ["Perro", "Gato", "Conejo", "Pájaro"],
    },
  ]);

  const handleSubmit = () => {
    // Aquí se puede enviar las respuestas a la base de datos o API.
    console.log("Cuestionario enviado");
  };

  return (
    <div className="Questionnaire">
      <h1>Cuestionario</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            {question.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name={`question${question.id}`}
                  value={option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Enviar cuestionario</button>
      </form>
    </div>
  );
}

export default Questionnaire;