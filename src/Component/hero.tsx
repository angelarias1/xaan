import React, { useState } from "react";
import "../styles/Hero.css";

import ArrowLeft from "../assets/web/izquierda.webp";
import ArrowRight from "../assets/web/derecha.webp";

import Img1 from "../assets/web/Rectangle 954.webp";
import Img2 from "../assets/web/imagen2.webp";
import Img3 from "../assets/web/Rectangle 954.webp";
import Img4 from "../assets/web/Rectangle 954.webp";

const images = [Img1, Img2, Img3, Img4];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">

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

        <div className="hero-right">
          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <div key={i} className="slide">
                  <img src={img} alt={`slide ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
