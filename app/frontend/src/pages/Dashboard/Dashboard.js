import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Bienvenido!</h1>
      <Link to="/questionnaire">
        <button>Realizar nuevo cuestionario</button>
      </Link>
      <Link to="/user_questionnaires">
      <button>Ver cuestionarios realizados</button>
      </Link>
    </div>
  );
}

export default Dashboard;
