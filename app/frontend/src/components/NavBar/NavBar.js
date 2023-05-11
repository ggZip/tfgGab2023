import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../../contexts/AuthContext";

function NavBar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    setShowModal(true);
  }

  const closeModal = async () => {
    setShowModal(false);
    await logout();
    navigate("/");
  }

  return (
    <nav className="Nav-bar">
      {!user && currentPath === "/register" && <Link to="/">Iniciar sesión</Link>}
      {!user && currentPath === "/" && <Link to="/register">Registrarse</Link>}
      {user && (
        <>
          {currentPath !== "/" && currentPath !== "/dashboard" && <Link to="/dashboard">Página principal</Link>}
          {currentPath !== "/" && currentPath !== "/questionnaire" && (
            <Link to="/questionnaire">Nuevo cuestionario</Link>
          )}
          {currentPath !== "/" && currentPath !== "/user_questionnaires" && (
            <Link to="/user_questionnaires">Mis cuestionarios</Link>
          )}
          <a href="/" onClick={handleLogout}>
            Desconectar
          </a>
        </>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Vuelva pronto</p>
            <button onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
