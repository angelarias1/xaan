import React from "react";
import "../../styles/Hom/QuienesSomos.css";

import imgGrande from "../../assets/web/imagen7.webp";
import imgChica from "../../assets/web/imagen7.webp";

const QuienesSomos: React.FC = () => {
  return (
    <section className="qnw-section">
      <div className="qnw-inner">

        {/* IZQUIERDA */}
        <div className="qnw-left">
          <span className="qnw-sub">¿QUIÉNES SOMOS?</span>

          <h3 className="qnw-title">
            NUESTRA FINALIDAD ES <br />
            PROTEGER LA PIEL DE <br />
            NUESTROS CLIENTES DE <br />
            FORMA SEGURA Y <br />
            RESPONSABLE CON EL <br />
            MEDIO AMBIENTE A <br />
            TRAVÉS DEL USO DE <br />
            TECNOLOGÍA DE PUNTA.
          </h3>

          <button className="qnw-btn">
            Ver catálogo de los dispensadores
          </button>
        </div>

        {/* DERECHA */}
        <div className="qnw-right">
          <img
            src={imgGrande}
            alt="Imagen principal XA’AN Skin Care"
            className="qnw-img qnw-img-up"
            loading="lazy"
          />

          <img
            src={imgChica}
            alt="Imagen secundaria productos XA’AN"
            className="qnw-img qnw-img-down"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default QuienesSomos;
