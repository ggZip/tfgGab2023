import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

function Header() {
  const { user } = useAuth();
  return (
    <header className="Header">
      <h1>{user ? `CanUPass, ${user.username}?` : "CanUPass?"}</h1>
    </header>
  );
}

export default Header;
// import React from "react";
// import { useAuth } from "../../contexts/AuthContext";
// import "./Header.css";

// function Header() {
//   const { user } = useAuth();
//   return (
//     <header className="Header">
//       <div className="logo">
//         <h1>{user ? `CanUPass, ${user.username}?` : "CanUPass?"}</h1>
//       </div>
//       <nav className="header-nav">
//         <a href="#home">Inicio</a>
//         <a href="#about">Acerca de</a>
//         <a href="#contact">Contacto</a>
//       </nav>
//       <button className="toggle-theme">Cambiar Tema</button>
//     </header>
//   );
// }

// export default Header;
