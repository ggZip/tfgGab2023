import "./App.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
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
        navigate("/dashboard");;
      } else {
        const error = await response.json();
        setMessage(`Error de inicio de sesión: ${error.error}`);
      }
    } catch (err) {
      setMessage(`Error de inicio de sesión: ${err.message}`);
    }
  };

  return (
    <div className="Login">
      <h1>Iniciar sesión</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <Link to="/register">
        <button>Registrarse</button>
      </Link>
    </div>
  );
}

export default Login;
