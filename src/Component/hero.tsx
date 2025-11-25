import React from "react";
import "../styles/Hero.css";

import ArrowLeft from "../assets/web/izquierda.webp";
import ArrowRight from "../assets/web/derecha.webp"; 
import heroImg from "../assets/web/Rectangle 954.webp";

const Hero: React.FC = () => {
  return (
    <section 
      className="hero"
      id="inicio"
      aria-label="Sección principal de XAAN Skin Care"
    >
      <div className="hero-inner">

        {/* TEXTO PRINCIPAL */}
        <div className="hero-left">
          <h1>
            TU NUEVO <br />
            PROVEEDOR DE <br />
            AMENIDADES
          </h1>

          <a 
            className="link barlow-light" 
            href="#productos"
            aria-label="Conoce nuestros productos de XAAN"
          >
            Conoce nuestros productos
          </a>

          {/* BOTONES DE NAVEGACIÓN */}
          <div className="hero-buttons" aria-label="Navegación de imágenes">
            <button 
              className="icon-btn"
              aria-label="Ver producto anterior"
            >
              <img src={ArrowLeft} alt="Flecha izquierda" />
            </button>

            <button 
              className="icon-btn"
              aria-label="Ver siguiente producto"
            >
              <img src={ArrowRight} alt="Flecha derecha" />
            </button>
          </div>
        </div>

        {/* IMAGEN DERECHA */}
        <div className="hero-right">
          <img 
            src={heroImg} 
            alt="Amenidades premium de XAAN Skin Care" 
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
