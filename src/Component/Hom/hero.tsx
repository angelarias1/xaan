import React, { useState, useEffect } from "react";
import "../../styles/Hom/Hero.css";

import ArrowLeft from "../../assets/web/izquierda.webp";
import ArrowRight from "../../assets/web/derecha.webp";

import Img1 from "../../assets/web/Rectangle 954.webp";
import Img2 from "../../assets/web/imagen2.webp";
import Img3 from "../../assets/web/Rectangle 954.webp";
import Img4 from "../../assets/web/imagen8.webp";

const slides = [
  { src: Img1, alt: "Aceites naturales XA’AN" },
  { src: Img2, alt: "Amenidades premium XA’AN" },
  { src: Img3, alt: "Aceites corporales XA’AN" },
  { src: Img4, alt: "Cuidado de la piel XA’AN" }
];

const NewHero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(auto);
  }, []);

  return (
    <section className="nh-hero">

      {/* CONTENEDOR OFICIAL 1350PX */}
      <div className="nh-hero-inner">

        {/* IZQUIERDA TEXTO */}
        <div className="nh-left">
          <h1 className="nh-title">
            TU NUEVO <br />
            PROVEEDOR DE <br />
            AMENIDADES
          </h1>

          <a href="#productos" className="nh-link">
            Conoce nuestros productos
          </a>

          <div className="nh-controls">
            <button className="nh-arrow-btn" onClick={prevSlide}>
              <img src={ArrowLeft} alt="Anterior" />
            </button>
            <button className="nh-arrow-btn" onClick={nextSlide}>
              <img src={ArrowRight} alt="Siguiente" />
            </button>
          </div>
        </div>

        {/* DERECHA IMAGEN */}
        <div className="nh-image-box">
          <img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            className="nh-image"
            loading="lazy"
          />

          <div className="nh-counter">
            {current + 1}/{slides.length}
          </div>
        </div>

      </div>

    </section>
  );
};

export default NewHero;
