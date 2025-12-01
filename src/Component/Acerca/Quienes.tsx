import React from "react";
import "../../styles/Acerca/Quienes.css";

// IMPORTA tus imágenes reales
import imgCrema from "../../assets/web/Acerca/Captura de Pantalla 2023-07-20 a la(s) 12.18 3.webp";
import imgLab from "../../assets/web/Acerca/iStock-1332654793 1 (1).webp";

const Quienes: React.FC = () => {
  return (
    <section className="section quienes-section">
      <div className="section-wrapper quienes-container">

        {/* TÍTULO SUPERIOR IZQUIERDO */}
        <p className="quienes-tag">QUIÉNES SOMOS</p>

        {/* IMÁGENES */}
        <div className="quienes-img-row">
          <img 
            src={imgCrema} 
            alt="Productos XA'AN elaborados con ingredientes naturales" 
            className="quienes-img"
            loading="lazy"
          />

          <img 
            src={imgLab} 
            alt="Proceso de elaboración en laboratorio eco amigable" 
            className="quienes-img"
            loading="lazy"
          />
        </div>

        {/* LÍNEA DECORATIVA */}
        <div className="quienes-line"></div>

      </div>
    </section>
  );
};

export default Quienes;
