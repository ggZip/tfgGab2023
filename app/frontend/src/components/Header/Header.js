import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

function Header() {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

    React.useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  return (
    <header className="Header">
      <div className="logo">
        <h1>{user ? `CanUPass, ${user.username}?` : "CanUPass?"}</h1>
      </div>
      <nav className="header-nav">
        <a href="#about">Acerca de</a>
        <a href="#contact">Contacto</a>
      </nav>
      <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>Cambiar a modo {darkMode ? 'claro' : 'oscuro'}</button>
    </header>
  );
}

export default Header;
