import React from "react";
import "../styles/QuienesSomos.css";

import imgGrande from "../assets/imagen7.jpg";
import imgChica from "../assets/imagen8.jpg";

const QuienesSomos: React.FC = () => {
  return (
    <section className="qs-section">

      <div className="qs-container">

        {/* TEXTO */}
        <div className="qs-left">
          <span className="qs-subtitle">¿QUIÉNES SOMOS?</span>

          <h3 className="qs-text">
            NUESTRA FINALIDAD ES <br />
            PROTEGER LA PIEL DE <br />
            NUESTROS CLIENTES DE <br />
            FORMA SEGURA Y <br />
            RESPONSABLE CON EL <br />
            MEDIO AMBIENTE A <br />
            TRAVÉS DEL USO DE <br />
            TECNOLOGÍA DE PUNTA.
          </h3>

          <button className="qs-btn">
            Ver catálogo de los dispensadores
          </button>
        </div>

        {/* IMÁGENES LADO A LADO CON DESPLAZAMIENTO */}
        <div className="qs-right">
          <img src={imgGrande} className="qs-img img-up" />
          <img src={imgChica} className="qs-img img-down" />
        </div>

      </div>

    </section>
  );
};

export default QuienesSomos;
