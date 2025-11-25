import React from "react";
import "../styles/SectionMensaje.css";

import icono from "../assets/icono.jfif"; // el iconito que aparece arriba

const SectionMensaje: React.FC = () => {
  return (
    <section className="mensaje-section">
      <img src={icono} alt="decoración" className="mensaje-icono" />

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
    </section>
  );
};

export default SectionMensaje;
