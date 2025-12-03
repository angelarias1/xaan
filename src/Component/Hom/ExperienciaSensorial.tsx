import React from "react";
import "../../styles/Hom/Sensorial.css";

import imagen from "../../assets/web/imagen.webp";

const Sensorial: React.FC = () => {
  return (
    <section className="sn-section">
      <div className="sn-container">

        {/* IZQUIERDA */}
        <div className="sn-left">
          <img
            src={imagen}
            alt="Experiencia sensorial XA’AN"
            className="sn-img"
            loading="lazy"
          />
        </div>

        {/* DERECHA */}
        <div className="sn-right">
          <h3 className="sn-title">
            CREAMOS EN <br />
            TUS CLIENTES <br />
            UNA EXPERIENCIA <br />
            SENSORIAL
          </h3>

          <p className="sn-text">
            Gracias a los aromas y fórmula de nuestros productos
            que eliminan los malos olores y generan un ambiente
            característico en tu negocio. Nuestros productos están
            elaborados a base de ingredientes naturales, saludables
            y con los más altos estándares de calidad.
          </p>

          <button className="sn-btn">Quiero hacer un pedido</button>
        </div>

      </div>
    </section>
  );
};

export default Sensorial;
