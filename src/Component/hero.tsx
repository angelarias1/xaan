import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

import ArrowLeft from "../assets/web/izquierda.webp";
import ArrowRight from "../assets/web/derecha.webp";

import Img1 from "../assets/web/Rectangle 954.webp";
import Img2 from "../assets/web/imagen2.webp";
import Img3 from "../assets/web/Rectangle 954.webp";
import Img4 from "../assets/web/imagen8.webp";

const images = [Img1, Img2, Img3, Img4];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  /* ⭐ AUTO SLIDE — igual que el anterior */
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500); // 🔥 Velocidad ajustable

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">

        {/* IZQUIERDA — NO TOCADA */}
        <div className="hero-left">
          <h1>
            TU NUEVO <br />
            PROVEEDOR DE <br />
            AMENIDADES
          </h1>

          <a className="link" href="#productos">
            Conoce nuestros productos
          </a>

          <div className="hero-buttons">
            <button className="icon-btn" onClick={prev}>
              <img src={ArrowLeft} alt="Anterior" />
            </button>

            <button className="icon-btn" onClick={next}>
              <img src={ArrowRight} alt="Siguiente" />
            </button>
          </div>
        </div>

        {/* DERECHA — IMAGEN MANUAL */}
        <div className="hero-right">
          <div className="hero-manual-img-container">
            <img
              src={images[index]}
              key={index}
              className="hero-manual-img"
              alt="Hero"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
