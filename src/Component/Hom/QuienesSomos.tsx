import React from "react";
import "../../styles/Hom/QuienesSomos.css";

import imgGrande from "../../assets/web/imagen7.webp";
import imgChica from "../../assets/web/imagen7.webp";

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

        {/* IMÁGENES */}
        <div className="qs-right">

          <img 
            src={imgGrande} 
            className="qs-img img-up"
            alt="Productos de XA'AN Skin Care presentados en formato profesional"
            loading="lazy"
          />

          <img 
            src={imgChica} 
            className="qs-img img-down"
            alt="Botellas y envases de cuidado de la piel de XA'AN"
            loading="lazy"
          />
          
        </div>

      </div>

    </section>
  );
};

export default QuienesSomos;
