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

  // 🔥 AUTO-SLIDE SUAVE Y SIN BUGS
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500); // cada 3.5 segundos

    return () => clearInterval(interval);
  }, []);

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

    {/* IMAGEN MANUAL + AUTO-SLIDE */}
    <div className="aceites-manual">
      <img
        src={images[index]}
        key={index}
        className="aceite-img"
        alt="Aceite corporal XA'AN"
      />
    </div>

  </div>
</section>

  );
};

export default Aceites;