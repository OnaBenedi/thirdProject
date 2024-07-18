import React, { useState } from "react";
import "./HamburguerMenu.css";
import mainLogo from "../../../assets/logos/main-logo.png";
import { Link } from "react-router-dom";

function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div>
      {!isOpen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
      {isOpen && (
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <img src={mainLogo} alt="logo-small" className="main-logo-small" />
          <button className="close-button" onClick={closeMenu}>
            <span>&times;</span>
          </button>
          <ul>
            <li>
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/profile"}>Perfil</Link>
            </li>
            <li>
              <Link to={"/trips"}>Viajes</Link>
            </li>
            <li>
              <Link to={"/config"}>Ajustes</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburguerMenu;
