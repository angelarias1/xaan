import React, { useState, useEffect } from "react";
import "../styles/Aceites.css";

import ArrowLeft from "../assets/web/izquierda.webp";
import ArrowRight from "../assets/web/derecha.webp";

import img1 from "../assets/web/prod1.webp";
import img2 from "../assets/web/prod2.webp";
import img3 from "../assets/web/prod3.webp";

const Aceites: React.FC = () => {
  const images = [img1, img2, img3, img1, img2, img3];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="aceites-section">
      <div className="aceites-container">

        {/* IZQUIERDA */}
        <div className="aceites-left">
          <h3 className="aceites-title">ACEITES CORPORALES</h3>

          <p className="aceites-text">
            Gracias a los aromas y fórmula de nuestros productos que eliminan
            los malos olores y generan un ambiente característico en tu negocio.
          </p>

          <button className="aceites-btn">
            Ver todos nuestros productos
          </button>

          {/* 🔥 BOTONES IGUALES AL HERO */}
          <div className="aceites-buttons">
            <button className="icon-btn" onClick={prev}>
              <img src={ArrowLeft} />
            </button>

            <button className="icon-btn" onClick={next}>
              <img src={ArrowRight} />
            </button>
          </div>
        </div>

        {/* CARRUSEL */}
        <div className="aceites-carousel">
          <div
            className="aceites-track"
            style={{ transform: `translateX(-${index * 260}px)` }}
          >
            {images.map((img, i) => (
              <div
                className={`aceite-item ${i === index + 1 ? "focus" : ""}`}
                key={i}
              >
                <img src={img} alt={`product-${i}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aceites;
