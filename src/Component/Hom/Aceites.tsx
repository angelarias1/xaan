import React, { useState, useEffect } from "react";
import "../../styles/Hom/Aceites.css";

import ArrowLeft from "../../assets/web/izquierda.webp";
import ArrowRight from "../../assets/web/derecha.webp";

import img1 from "../../assets/web/prod1.webp";
import img2 from "../../assets/web/prod2.webp";
import img3 from "../../assets/web/prod3.webp";

const Aceites: React.FC = () => {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Imágenes para el carrusel 3D
  const prevImg = images[(index - 1 + images.length) % images.length];
  const currentImg = images[index];
  const nextImg = images[(index + 1) % images.length];

  return (
    <section className="aceites-section">
      <div className="aceites-container-main">

        {/* IZQUIERDA */}
        <div className="aceites-left">
          <span className="aceites-tag">LO MÁS PEDIDO</span>

          <h3 className="aceites-title">ACEITES CORPORALES</h3>

          <p className="aceites-text">
            Gracias a los aromas y fórmula de nuestros productos que eliminan
            los malos olores y generan un ambiente característico en tu negocio.
          </p>

          <button className="aceites-btn">
            Ver todos nuestros productos
          </button>

          <div className="aceites-buttons">
            <button className="icon-btn" onClick={prev}>
              <img src={ArrowLeft} />
            </button>

            <button className="icon-btn" onClick={next}>
              <img src={ArrowRight} />
            </button>
          </div>
        </div>

        {/* CARRUSEL 3D */}
        <div className="aceites-carousel">
          <img
            src={prevImg}
            className="aceite-img side left"
            alt="Producto esperando turno"
          />

          <img
            src={currentImg}
            className="aceite-img center"
            alt="Producto principal"
          />

          <img
            src={nextImg}
            className="aceite-img side right"
            alt="Producto esperando turno"
          />
        </div>

      </div>
    </section>
  );
};

export default Aceites;
