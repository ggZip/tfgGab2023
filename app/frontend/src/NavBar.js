import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";
import { useAuth } from "./AuthContext";


function NavBar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav-bar">
      {currentPath === "/register" && <Link to="/">Login</Link>}
      {currentPath === "/" && <Link to="/register">Registrarse</Link>}
      {user && (
      <>
        {currentPath !== "/dashboard" && <Link to="/dashboard">Dashboard</Link>}
        {currentPath !== "/questionnaire" && (
          <Link to="/questionnaire">Nuevo cuestionario</Link>
        )}
        {currentPath !== "/user_questionnaires" && (
          <Link to="/user_questionnaires">Mis cuestionarios</Link>
        )}
        <Link to="/" onClick={logout}>
          Desconectar
        </Link>
      </>
    )}
    </nav>
  );
}

export default NavBar;
