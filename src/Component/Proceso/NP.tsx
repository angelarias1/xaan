import React, { useState, useEffect } from "react";
import "../../styles/Proceso/NP.css";

import npImg1 from "../../assets/web/Proceso/Rectangle 980.webp";
import npImg2 from "../../assets/web/Proceso/Rectangle 981.webp";

import ArrowLeft from "../../assets/web/izquierda.webp";
import ArrowRight from "../../assets/web/derecha.webp";

const NP: React.FC = () => {
  const images = [npImg2, npImg1, npImg2, npImg1];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  // imagen principal (derecha)
  const mainImg = images[index];

  // imagen secundaria (izquierda)
  const leftImg = images[(index - 1 + images.length) % images.length];

  return (
    <section className="np-section">
      <div className="np-container np-center">

        {/* 🔥 TÍTULO */}
        <p className="np-title">NUESTRO PROCESO</p>

        {/* 🔥 CARRUSEL CON 2 IMÁGENES */}
        <div className="np-dual">
          <img src={leftImg} className="np-img np-small" alt="previa" />
          <img src={mainImg} className="np-img np-main" alt="actual" />
        </div>

        {/* 🔥 CONTROLES */}
        <div className="vutom-controls">
          <div className="vutom-buttons">
            <button className="vutom-btn" onClick={prev}>
              <img src={ArrowLeft} alt="Anterior" className="vutom-arrow" />
            </button>

            <button className="vutom-btn" onClick={next}>
              <img src={ArrowRight} alt="Siguiente" className="vutom-arrow" />
            </button>
          </div>

          <p className="np-counter">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>

      </div>
    </section>
  );
};

export default NP;
