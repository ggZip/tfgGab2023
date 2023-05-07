import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Questionnaire from "./Questionnaire";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <div className="container">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/questionnaire" element={<Questionnaire />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
