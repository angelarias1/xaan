import React from "react";
import { Link } from "react-router-dom";
import "../../CuerpoStyles/ProductosStyles/CuerpoProductos.css";

import imgAroma from "../../../../../assets/web/Blanco.webp";
import flecha from "../../../../../assets/web/izquierda.webp";
import NuevaSeccion from "../../../../Hom/NuevaSeccion";

const Cuerpo3: React.FC = () => {
  return (
    <>
      <section className="p2-section">
        <div className="p2-container">

          {/* IZQUIERDA: IMAGEN */}
          <div className="p2-left">
            <img src={imgAroma} alt="Aromatizante de Blancos" className="p2-img" />
          </div>

          {/* DERECHA: CONTENIDO */}
          <div className="p2-right">

            {/* REGRESAR */}
            <div className="p2-back">
              <img src={flecha} alt="volver" className="p2-arrow" />
              <Link to="/aromatizantes" className="p2-back-link">
                Aromatizantes
              </Link>
            </div>

            {/* TÍTULO */}
            <h2 className="p2-title">
              AROMATIZANTE <br /> DE BLANCOS
            </h2>

            {/* DESCRIPCIÓN */}
            <p className="p2-text">
              Nuestros aromatizantes para blancos son la elección perfecta para crear 
              ambientes cautivadores. Con fragancias diseñadas para mezclarse 
              armoniosamente en espacios blancos, elevamos la experiencia sensorial 
              y el diseño interior, añadiendo un toque de lujo olfativo.
            </p>

            {/* BOTÓN */}
            <button className="p2-btn">Quiero hacer un pedido</button>

            {/* MODO DE USO */}
            <div className="p2-dropdown">
              <span>MODO DE USO</span>
              <span className="p2-drop-arrow">⌄</span>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 NUEVA SECCIÓN VA AQUÍ, DEBAJO DE TODO EL PRODUCTO */}
      <NuevaSeccion />
    </>
  );
};

export default Cuerpo3;
