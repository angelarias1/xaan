import React from "react";
import "../../styles/Hom/SectionMensaje.css";

import icono from "../../assets/web/icono.webp";

const SectionMensaje: React.FC = () => {
  return (
    <section className="section mensaje-section">
      <div className="section-wrapper mensaje-container">

        <img 
          src={icono} 
          alt="Icono decorativo de XA’AN Skin Care" 
          className="mensaje-icono" 
        />

        <h3 className="mensaje-titulo">
          EN XA’AN SKIN CARE TRABAJAMOS DE FORMA <br />
          INTEGRAL, ANALIZANDO CONTINUAMENTE <br />
          LAS NECESIDADES Y REQUERIMIENTOS DE <br />
          CADA UNO DE NUESTROS CLIENTES.
        </h3>

        <p className="mensaje-texto">
          De esta manera logramos personalizar nuestros productos de acuerdo a sus necesidades,
          implementando y ejecutando distintos métodos y con la más alta tecnología, obteniendo
          los mejores resultados en nuestros productos y servicios.
        </p>

      </div>
    </section>
  );
};

export default SectionMensaje;
