import React, { useState } from "react";
import "../styles/Navbar.css";

import menuIcon from "../assets/menu.png";
import xaanLogo from "../assets/loogo.jfif";
import closeIcon from "../assets/51e5d1d8-096f-4c57-90f2-8ba9af697072.jfif";
import logoImg from "../assets/48a38a8d-aa0e-4d91-8354-89cd1f210dd0.jfif";
import igIcon from "../assets/Vector.svg";
import fbIcon from "../assets/face.svg";
import rightImg from "../assets/Isotipo.svg";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // 🔥 SCROLL A SECCIONES
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  // 🔥 ENLACES SOCIALES
  const socialLinks = {
    fb: "https://www.facebook.com/",
    ig: "https://www.instagram.com/",
    whatsapp: "https://wa.me/529982403593",
    email: "mailto:hola@xaan.mx"
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="nav">
        <button className="nav-menu-btn" onClick={() => setOpen(true)}>
          <img src={menuIcon} alt="menu" className="menu-img" />
        </button>

        <img src={xaanLogo} alt="XAAN" className="nav-logo-img" />

        {/* Brochure → PDF o lo que quieras */}
        <a className="nav-link" href="#">Brochure</a>
      </nav>

      {/* OVERLAY */}
      <div className={`menu-overlay ${open ? "show" : ""}`}>

        {/* BOTÓN CERRAR */}
        <button className="close-btn" onClick={() => setOpen(false)}>
          <img src={closeIcon} alt="close" className="close-img" />
        </button>

        {/* CONTENEDOR */}
        <div className="menu-container">

          {/* LADO IZQUIERDO */}
          <div className="menu-half left">
            <div className="menu-left-content">

              <p className="top-mini">XAAN SKIN CARE</p>

              <div className="center-links">
                <a onClick={() => scrollTo("productos")}>PRODUCTOS</a>
                <a onClick={() => scrollTo("acerca")}>ACERCA DE XAAN</a>
                <a onClick={() => scrollTo("proceso")}>PROCESO</a>
                <a onClick={() => scrollTo("contacto")}>CONTACTO</a>
              </div>

              <p className="bottom-mini">CUN · MX</p>

            </div>
          </div>

          {/* LADO DERECHO */}
          <div className="menu-half right">
            <div className="menu-right-content">

              <img src={logoImg} alt="Logo" className="right-logo" />

              {/* INFO + REDES JUNTOS */}
              <div className="right-info">
                <p onClick={() => window.open("#", "_blank")}>Brochure</p>
                <p onClick={() => window.open("#", "_blank")}>Cátalogo de dispensadores</p>

                {/* WHATSAPP */}
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(socialLinks.whatsapp, "_blank")}
                >
                  TEL. +52 998 240 3593
                </p>

                {/* EMAIL */}
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => window.location.href = socialLinks.email}
                >
                  hola@xaan.mx
                </p>

                {/* ICONOS */}
                <div className="right-socials">
                  <img
                    src={igIcon}
                    className="social-icon"
                    alt="Instagram"
                    onClick={() => window.open(socialLinks.ig, "_blank")}
                  />

                  <img
                    src={fbIcon}
                    className="social-icon"
                    alt="Facebook"
                    onClick={() => window.open(socialLinks.fb, "_blank")}
                  />
                </div>
              </div>

              {/* DIRECCIÓN */}
              <div className="right-address">
                <p>
                  Colima 392, 2do. Piso Colonia Roma, Delegación Cuauhtémoc  
                  C.P. 06700, Ciudad de México.
                </p>

                <img src={rightImg} alt="Decor" className="right-bottom-img" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
