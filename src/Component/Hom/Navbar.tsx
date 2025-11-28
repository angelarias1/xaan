import React, { useState } from "react";
import "../../styles/Navbar.css";

import menuIcon from "../../assets/menu.png";
import xaanLogo from "../../assets/loogo.jfif";
import closeIcon from "../../assets/51e5d1d8-096f-4c57-90f2-8ba9af697072.jfif";
import logoImg from "../../assets/48a38a8d-aa0e-4d91-8354-89cd1f210dd0.jfif";
import igIcon from "../../assets/Vector.svg";
import fbIcon from "../../assets/face.svg";
import rightImg from "../../assets/Isotipo.svg";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Scroll suave
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

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
        <button 
          className="nav-menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <img src={menuIcon} alt="Abrir menú de navegación" className="menu-img" />
        </button>

        <img 
          src={xaanLogo} 
          alt="Logo de XA'AN Skin Care" 
          className="nav-logo-img" 
        />

        <a className="nav-link" href="#" aria-label="Abrir brochure">
          Brochure
        </a>
      </nav>

      {/* OVERLAY */}
      <div className={`menu-overlay ${open ? "show" : ""}`}>

        {/* BOTÓN CERRAR */}
        <button 
          className="close-btn" 
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
        >
          <img src={closeIcon} alt="Cerrar menú" className="close-img" />
        </button>

        {/* CONTENEDOR */}
        <div className="menu-container">

          {/* IZQUIERDA */}
          <div className="menu-half left">
            <div className="menu-left-content">

              <p className="top-mini">XAAN SKIN CARE</p>

              <div className="center-links">
                <a 
                  role="button" 
                  tabIndex={0}
                  onClick={() => scrollTo("productos")}
                >
                  PRODUCTOS
                </a>

                <a 
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollTo("acerca")}
                >
                  ACERCA DE XAAN
                </a>

                <a 
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollTo("proceso")}
                >
                  PROCESO
                </a>

                <a 
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollTo("contacto")}
                >
                  CONTACTO
                </a>
              </div>

              <p className="bottom-mini">CUN · MX</p>

            </div>
          </div>

          {/* DERECHA */}
          <div className="menu-half right">
            <div className="menu-right-content">

              <img 
                src={logoImg} 
                alt="Isotipo de XA'AN Skin Care" 
                className="right-logo" 
              />

              <div className="right-info">
                <p role="button" tabIndex={0}>Brochure</p>
                <p role="button" tabIndex={0}>Catálogo de dispensadores</p>

                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(socialLinks.whatsapp, "_blank")}
                >
                  TEL. +52 998 240 3593
                </p>

                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => (window.location.href = socialLinks.email)}
                >
                  hola@xaan.mx
                </p>

                {/* REDES */}
                <div className="right-socials">
                  <img
                    src={igIcon}
                    className="social-icon"
                    alt="Instagram oficial de XA'AN Skin Care"
                    onClick={() => window.open(socialLinks.ig, "_blank")}
                    loading="lazy"
                  />

                  <img
                    src={fbIcon}
                    className="social-icon"
                    alt="Facebook oficial de XA'AN Skin Care"
                    onClick={() => window.open(socialLinks.fb, "_blank")}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="right-address">
                <p>
                  Colima 392, 2do. Piso Colonia Roma, Delegación Cuauhtémoc  
                  C.P. 06700, Ciudad de México.
                </p>

                <img 
                  src={rightImg} 
                  alt="Elemento decorativo de XA'AN" 
                  className="right-bottom-img" 
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
