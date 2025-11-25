import React from "react";
import "../styles/header.css";

// Importa tu logo aquí
import logoXaan from "../assets/66cb24c8-4-491a-9ccc-939216431629.jfif"; // cámbialo por tu imagen real

const Header: React.FC = () => {
  return (
    <header className="xaan-header">
      {/* IZQUIERDA */}
      <div className="header-left">
        <img
          src="https://img.icons8.com/ios-glyphs/30/805b4a/menu--v1.png"
          className="menu-icon"
          alt="menu"
        />
      </div>

      {/* CENTRO */}
      <div className="header-center">
        <img src={logoXaan} className="header-logo" alt="logo" />
      </div>

      {/* DERECHA */}
      <div className="header-right">
        <a href="#nosotros">Brochure</a>
      </div>
    </header>
  );
};

export default Header;
