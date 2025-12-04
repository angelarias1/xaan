import React from "react";
import "../AceitesStyles/Nutricion.css";

const Nutricion: React.FC = () => {
  return (
    <section className="nu-section">
      <div className="nu-container">

        {/* IZQUIERDA — TÍTULO */}
        <div className="nu-left">
          <h2 className="nu-title">
            NUTRICIÓN Y<br />
            CUIDADO PARA<br />
            TU PIEL
          </h2>
        </div>

        {/* DERECHA — TEXTO + BOTÓN + LINKS */}
        <div className="nu-right">

          <p className="nu-text">
            Embárcate en un viaje sensorial a través de nuestra gama de cuidado corporal. 
            Desde la frescura de la ducha hasta la caricia de las cremas hidratantes, 
            cada producto es un poema de bienestar. Descubre aromas en nuestros shampoos, 
            suaviza la piel con exfoliantes y sumérgete en relajación con aceites de masaje. 
            Tu cuerpo es el lienzo, y nuestros productos, las pinceladas de indulgencia que lo cuidan.
          </p>

          <button className="nu-btn">
            Quiero hacer un pedido
          </button>

          <div className="nu-links">
            <a href="#">AROMATIZANTE DE BLANCOS <span>↗</span></a>
            <a href="#">AROMATIZANTE DE AMBIENTES <span>↗</span></a>
            <a href="#">DIFUSORES <span>↗</span></a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Nutricion;
