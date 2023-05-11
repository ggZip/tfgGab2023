import "./Register.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username.trim()) {
      setMessage('Por favor, introduce tu nombre de usuario');
      return;
    }
    if (!email.trim()) {
      setMessage('Por favor, introduce tu email');
      return;
    }

    if (!password.trim()) {
      setMessage('Por favor, introduce tu contraseña');
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        setMessage("Registro exitoso");
        setShowModal(true);
      } else {
        const error = await response.json();
        setMessage(`Error de registro: ${error.error}`);
        if (error.error === `duplicate key value violates unique constraint "users_username_key"`) setMessage(`Error de registro: Nombre de usuario ya existe`);
      }
    } catch (err) {
      setMessage(`Error de registro: ${err.message}`);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/");
  };
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="Register">
      <h1>Registrarse</h1>
      <input
        className="register-input"
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="register-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="register-input"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
      {message && message !== "Registro exitoso" && <p className="error-message">{message}</p>}
      <button onClick={handleCancel}>Cancelar</button>

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
}

export default Register;      
