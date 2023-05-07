import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Inicio</Link>
      <Link to="/register">Registrarse</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/questionnaire">Cuestionario</Link>
    </nav>
  );
}

export default NavBar;
