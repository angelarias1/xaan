import React from "react";
import "../AromaStyles/Perfuman.css";

const Perfuman: React.FC = () => {
  return (
    <section className="pf-section">
      <div className="pf-container">

        {/* IZQUIERDA — TÍTULO */}
        <div className="pf-left">
          <h2 className="pf-title">
            ESENCIAS QUE <br />
            PERFUMAN EL <br />
            ALMA
          </h2>
        </div>

        {/* DERECHA — TEXTO + BOTÓN + LINKS */}
        <div className="pf-right">

          <p className="pf-text">
            Embárcate en un viaje sensorial a través de nuestra gama 
            de cuidado corporal. Desde la frescura de la ducha hasta la 
            caricia de las cremas hidratantes, cada producto es un poema 
            de bienestar. Descubre aromas en nuestros shampoos, suaviza la 
            piel con exfoliantes y sumérgete en relajación con aceites de 
            masaje. Tu cuerpo es el lienzo, y nuestros productos, las 
            pinceladas de indulgencia que lo cuidan.
          </p>

          <button className="pf-btn">
            Quiero hacer un pedido
          </button>

          <div className="pf-links">
            <a href="#">AROMATIZANTE DE BLANCOS <span>↗</span></a>
            <a href="#">AROMATIZANTE DE AMBIENTES <span>↗</span></a>
            <a href="#">DIFUSORES <span>↗</span></a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Perfuman;
