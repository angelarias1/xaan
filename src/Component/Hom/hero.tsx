import React, { useState, useEffect } from "react";
import "../../styles/Hom/Hero.css";

import ArrowLeft from "../../assets/web/izquierda.webp";
import ArrowRight from "../../assets/web/derecha.webp";

import Img1 from "../../assets/web/Rectangle 954.webp";
import Img2 from "../../assets/web/imagen2.webp";
import Img3 from "../../assets/web/Rectangle 954.webp";
import Img4 from "../../assets/web/imagen8.webp";

const images = [
  { src: Img1, alt: "Aceites naturales para hoteles y spas XA'AN" },
  { src: Img2, alt: "Productos corporales y amenidades premium XA'AN" },
  { src: Img3, alt: "Aceites corporales para masaje de alta calidad XA'AN" },
  { src: Img4, alt: "Productos de cuidado de la piel de XA'AN Skin Care" }
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">

        {/* IZQUIERDA */}
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
              <img src={ArrowLeft} alt="Imagen anterior" />
            </button>

            <button className="icon-btn" onClick={next}>
              <img src={ArrowRight} alt="Imagen siguiente" />
            </button>
          </div>
        </div>

        {/* DERECHA */}
   <div className="hero-manual-img-container">
  <img
    src={images[index].src}
    key={index}
    className="hero-manual-img"
    alt={images[index].alt}
    loading="lazy"
  />

  {/* 🔥 Numerador estilo de referencia */}
  <div className="hero-counter-vertical">
    {index + 1}/{images.length}
  </div>
</div>


      </div>
    </section>
  );
};

export default Hero;
