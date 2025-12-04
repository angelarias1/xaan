import React from "react";
import "../CuerpoStyles/Cuerpo.css";

const Cuerpo: React.FC = () => {
  return (
    <section className="cu-section">
      <div className="cu-container">

        {/* IZQUIERDA — TÍTULO */}
        <div className="cu-left">
          <h2 className="cu-title">
            Belleza<br />
            NATURAL PARA <br />
            TU CUERPO
          </h2>
        </div>

        {/* DERECHA — TEXTO + BOTÓN + LINKS */}
        <div className="cu-right">

          <p className="cu-text">
            Embárcate en un viaje sensorial a través de nuestra gama de cuidado corporal. 
            Desde la frescura de la ducha hasta la caricia de las cremas hidratantes, 
            cada producto es un poema de bienestar. Descubre aromas en nuestros shampoos, 
            suaviza la piel con exfoliantes y sumérgete en relajación con aceites de masaje. 
            Tu cuerpo es el lienzo, y nuestros productos, las pinceladas de indulgencia que lo cuidan.
          </p>

          <button className="cu-btn">
            Quiero hacer un pedido
          </button>

          <div className="cu-links">
            <a href="#">FACIAL <span>↗</span></a>
            <a href="#">CORPORAL <span>↗</span></a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Cuerpo;
