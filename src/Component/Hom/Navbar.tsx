import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Hom/Navbar.css";

import menuIcon from "../../assets/web/menu.webp";
import xaanLogo from "../../assets/web/loogo.webp";
import closeIcon from "../../assets/web/51e5d1d8-096f-4c57-90f2-8ba9af697072.webp";
import logoImg from "../../assets/web/48a38a8d-aa0e-4d91-8354-89cd1f210dd0.webp";
import igIcon from "../../assets/Vector.svg";
import fbIcon from "../../assets/face.svg";
import rightImg from "../../assets/Isotipo.svg";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (route: string) => {
    navigate(route);
    setOpen(false);
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

        {/* ⭐ LOGO QUE REDIRIGE A HOME */}
        <img 
          src={xaanLogo} 
          alt="Logo de XA'AN Skin Care" 
          className="nav-logo-img"
          onClick={() => navigateTo("/")}
          style={{ cursor: "pointer" }}
        />

        <a className="nav-link" href="#">Brochure</a>
      </nav>

      {/* OVERLAY */}
      <div className={`menu-overlay ${open ? "show" : ""}`}>

        {/* BOTÓN CERRAR */}
        <button 
          className="close-btn" 
          onClick={() => setOpen(false)}
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
                  onClick={() => navigateTo("/categorias")}
                  role="button"
                  tabIndex={0}
                  type="button"
                >
                  PRODUCTOS
                </a>

                <a
                  onClick={() => navigateTo("/acerca")}
                  role="button"
                  tabIndex={0}
                  type="button"
                >
                  ACERCA DE XAAN
                </a>

                <a
                  onClick={() => navigateTo("/proceso")}
                  role="button"
                  tabIndex={0}
                  type="button"
                >
                  PROCESO
                </a>

                <a
                  onClick={() => navigateTo("/contacto")}
                  role="button"
                  tabIndex={0}
                  type="button"
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
                alt="Isotipo" 
                className="right-logo" 
              />

              <div className="right-info">
                <p>Brochure</p>
                <p>Catálogo de dispensadores</p>

                <p onClick={() => window.open(socialLinks.whatsapp, "_blank")}>
                  TEL. +52 998 240 3593
                </p>

                <p onClick={() => (window.location.href = socialLinks.email)}>
                  hola@xaan.mx
                </p>

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

              <div className="right-address">
                <p>
                  Colima 392, 2do. Piso Colonia Roma, Delegación Cuauhtémoc  
                  C.P. 06700, Ciudad de México.
                </p>

                <img 
                  src={rightImg}
                  className="right-bottom-img"
                  alt="Decorativo"
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
