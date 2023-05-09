import React from "react";
import { useAuth } from "./AuthContext";
import "./App.css";

function Header() {
  const { user } = useAuth();
  return (
    <header className="header">
      <h1>{user ? `CanUPass ${user.username}?` : "CanUPass?"}</h1>
    </header>
  );
}

export default Header;
