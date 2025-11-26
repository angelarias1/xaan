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

        <div className="hero-left">
          <h1>
            TU NUEVO <br />
            PROVEEDOR DE <br />
            AMENIDADES
          </h1>

          <a 
            className="link barlow-light" 
            href="#productos"
          >
            Conoce nuestros productos
          </a>

          <div className="hero-buttons">
            <button className="icon-btn">
              <img src={ArrowLeft} alt="Flecha izquierda" />
            </button>

            <button className="icon-btn">
              <img src={ArrowRight} alt="Flecha derecha" />
            </button>
          </div>
        </div>

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
