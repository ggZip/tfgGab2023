import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <Link to="/questionnaire">
        <button>Realizar nuevo cuestionario</button>
      </Link>
      <button>Ver cuestionarios realizados</button>
    </div>
  );
}

export default Dashboard;
