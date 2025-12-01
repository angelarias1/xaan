import React from "react";
import "../../styles/Acerca/Quienes.css";

// IMPORTA tus imágenes reales
import imgCrema from "../../assets/web/Acerca/Captura de Pantalla 2023-07-20 a la(s) 12.18 3.webp";
import imgLab from "../../assets/web/Acerca/iStock-1332654793 1 (1).webp";

const Quienes: React.FC = () => {
  return (
    <section className="quienes-section">

      {/* TÍTULO SUPERIOR IZQUIERDO */}
      <p className="quienes-tag">QUIÉNES SOMOS</p>

      {/* CONTENEDOR DE IMÁGENES */}
      <div className="quienes-img-row">
        <img src={imgCrema} alt="Producto XA'AN" className="quienes-img" />
        <img src={imgLab} alt="Laboratorio natural" className="quienes-img" />
      </div>

      {/* LÍNEA DECORATIVA */}
      <div className="quienes-line"></div>

    </section>
  );
};

export default Quienes;
