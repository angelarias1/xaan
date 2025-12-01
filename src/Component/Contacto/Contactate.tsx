import React from "react";
import "../../styles/Contacto/Contactate.css";

const Contactate: React.FC = () => {
  return (
    <section className="section contacto-section">
      <div className="section-wrapper contacto-wrapper">

        {/* IZQUIERDA */}
        <div className="contacto-left">
          <h2 className="contacto-title">
            CONÉCTATE <br />
            CON NOSOTROS: <br />
            ESTAMOS A TU <br />
            DISPOSICIÓN
          </h2>
        </div>

        {/* DERECHA */}
        <div className="contacto-right">
          <p className="contacto-text">
            ¡Estamos aquí para ti! Si tienes preguntas, sugerencias o simplemente deseas conectarte,
            nuestro equipo espera con ansias escucharte. Contáctanos hoy mismo y comencemos esta conversación.
          </p>

          <button className="contacto-btn">Quiero hacer un pedido</button>
        </div>

      </div>
    </section>
  );
};

export default Contactate;
