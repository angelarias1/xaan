import React from "react";
import "../../styles/Hom/WhoWeAre.css";

import imagen1 from "../../assets/web/imagen1.webp";
import imagen2 from "../../assets/web/imagen2.webp";

const WhoWeAre: React.FC = () => {
  return (
    <section className="who-section" id="acerca">
      <div className="who-container">

        {/* TEXTO IZQUIERDO */}
        <div className="who-left">

          <span className="who-tag">QUIÉNES SOMOS</span>

          <h2 className="who-title">
            SOMOS UNA EMPRESA  
            <br />MEXICANA DEDICADA  
            <br />AL CUIDADO Y SALUD  
            <br />DE LA PIEL
          </h2>

          <p className="who-description">
            Nuestros productos están elaborados a base de ingredientes naturales,
            saludables y con los más altos estándares de calidad.
          </p>

          <button className="who-button">
            QUIERO HACER UN PEDIDO
          </button>
        </div>

        {/* IMÁGENES */}
        <div className="who-right">
          <img
            src={imagen1}
            className="who-img img1"
            alt="Ingredientes naturales y productos para el cuidado de la piel – XAAN"
            loading="lazy"
          />

          <img
            src={imagen2}
            className="who-img img2"
            alt="Productos mexicanos dedicados a la salud de la piel – XAAN"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
