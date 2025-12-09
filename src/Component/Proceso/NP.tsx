import React, { useState, useEffect } from "react";
import "../../styles/Proceso/NP.css";

import npImg1 from "../../assets/web/Proceso/Rectangle 980.webp";
import npImg2 from "../../assets/web/Proceso/Rectangle 981.webp";

import ArrowLeft from "../../assets/web/izquierda.webp";
import ArrowRight from "../../assets/web/derecha.webp";

const NP: React.FC = () => {

  // 🔥 Lista de imágenes del carrusel (PUEDES AGREGAR MÁS)
  const images = [npImg2, npImg1, npImg2, npImg1];

  const [index, setIndex] = useState(0);

  // 🔥 función para avanzar a la siguiente imagen
  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // 🔥 función para retroceder
  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 🔥 autoplay (cada 4 segundos)
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="np-section">
      <div className="np-container">

        {/* COLUMNA IZQUIERDA */}
        <div className="np-left">
          <img src={npImg1} alt="Proceso laboratorio" className="np-img" />
          <p className="np-title">NUESTRO PROCESO</p>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="np-right">

          {/* 🔥 IMAGEN DINÁMICA DEL CARRUSEL */}
          <img
            src={images[index]}
            alt="Carrusel"
            className="np-img"
          />

          {/* CONTROLES RENOMBRADOS */}
          <div className="vutom-controls">
            <div className="vutom-buttons">
              <button className="vutom-btn" onClick={prev}>
                <img src={ArrowLeft} alt="Anterior" className="vutom-arrow" />
              </button>
              <button className="vutom-btn" onClick={next}>
                <img src={ArrowRight} alt="Siguiente" className="vutom-arrow" />
              </button>
            </div>

            {/* 🔥 CONTADOR AUTOMÁTICO */}
            <p className="np-counter">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NP;
