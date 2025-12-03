import React from "react";
import "../../styles/Hom/SectionMensaje.css";

import icono from "../../assets/web/icono.webp";

const SectionMensaje: React.FC = () => {
  return (
    <section className="nm-section">
      <div className="nm-wrapper">

        <img
          src={icono}
          alt="Icono XA’AN Skin Care"
          className="nm-icon"
          loading="lazy"
        />

        <h3 className="nm-title">
          EN XA’AN SKIN CARE TRABAJAMOS DE FORMA <br />
          INTEGRAL, ANALIZANDO CONTINUAMENTE <br />
          LAS NECESIDADES Y REQUERIMIENTOS DE <br />
          CADA UNO DE NUESTROS CLIENTES.
        </h3>

        <p className="nm-text">
          De esta manera logramos personalizar nuestros productos de acuerdo a sus necesidades,
          implementando y ejecutando distintos métodos y con la más alta tecnología, obteniendo
          los mejores resultados en nuestros productos y servicios.
        </p>

      </div>
    </section>
  );
};

export default SectionMensaje;
