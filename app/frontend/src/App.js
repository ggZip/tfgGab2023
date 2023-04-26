import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from './Login';

function Home() {
  return (
    <>
      <h1>Calculadora de notas</h1>
      <Link to="/register">
        <button>Registrarse</button>
      </Link>
      <Link to="/login">
      <button>Iniciar sesión</button>
      </Link>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


