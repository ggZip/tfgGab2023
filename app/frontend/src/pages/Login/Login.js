import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api2/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("Inicio de sesión exitoso");  
        login(data.user.id,data.user.username, data.token);
        setShowModal(true);
      } else {
        const error = await response.json();
        setMessage(`Error de inicio de sesión: ${error.error}`);
      }
    } catch (err) {
      setMessage(`Error de inicio de sesión: ${err.message}`);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/dashboard");
  }

  return (
    <div className="Login">
      <h1>Iniciar sesión</h1>
      <input
        class="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        class="login-input"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {message && message !== "Inicio de sesión exitoso" && <p>{message}</p>}
      <Link to="/register">
        <button>Registrarse</button>
      </Link>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{message}</h2>
            <button onClick={handleModalClose}>Genial!</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
