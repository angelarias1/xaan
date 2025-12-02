import React from "react";
import "../../styles/Acerca/Quienes.css";

import imgCrema from "../../assets/web/Acerca/Captura de Pantalla 2023-07-20 a la(s) 12.18 3.webp";
import imgLab from "../../assets/web/Acerca/iStock-1332654793 1 (1).webp";

const Quienes: React.FC = () => {
  return (
<section className="quienes-section">
  <div className="quienes-container">

    <p className="quienes-tag">QUIÉNES SOMOS</p>

    <div className="quienes-img-row">
      <img src={imgCrema} alt="Producto XA'AN" className="quienes-img" />
      <img src={imgLab} alt="Laboratorio natural" className="quienes-img" />
    </div>

    <div className="quienes-line"></div>

  </div>
</section>

  );
};

export default Quienes;
