import React from "react";
import "../../styles/Acerca/Nosmueve.css";

const Nosmueve: React.FC = () => {
  return (
   <section className="nosmueve-section">
  <div className="nosmueve-container">

    {/* IZQUIERDA */}
    <div className="nosmueve-left">
      <p className="nosmueve-tag">LO QUE NOS MUEVE</p>

      <p className="nosmueve-text">
        Nuestra pasión reside en cuidar a nuestros
        valiosos clientes de una manera que refleje
        nuestro compromiso con el planeta.
        <br /><br />
        Cada producto que creamos es un testimonio de nuestra dedicación
        a brindar una experiencia de cuidado excepcional, mientras abrazamos
        prácticas amigables con el medio ambiente.
      </p>
    </div>

    {/* DERECHA */}
    <div className="nosmueve-right">
      <h2 className="nosmueve-title">
        EN CADA FRAGANCIA<br />
        Y TEXTURA, CREAMOS<br />
        EL ARTE DE CUIDAR<br />
        EL SER.
      </h2>
    </div>

  </div>
</section>

  );
};

export default Nosmueve;
