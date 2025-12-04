import React from "react";
import { Link } from "react-router-dom";
import "../../AromaStyles/ProductosStyles/AromasProductos.css";

import imgAroma from "../../../../../assets/web/Blanco.webp";
import flecha from "../../../../../assets/web/izquierda.webp";
import NuevaSeccion from "../../../../Hom/NuevaSeccion";

const Producto1Aromatizante: React.FC = () => {
  return (
    <>
      <section className="p1-section">
        <div className="p1-container">

          {/* IZQUIERDA: IMAGEN */}
          <div className="p1-left">
            <img src={imgAroma} alt="Aromatizante de Blancos" className="p1-img" />
          </div>

          {/* DERECHA: CONTENIDO */}
          <div className="p1-right">

            {/* REGRESAR */}
            <div className="p1-back">
              <img src={flecha} alt="volver" className="p1-arrow" />
              <Link to="/aromatizantes" className="p1-back-link">
                Aromatizantes
              </Link>
            </div>

            {/* TÍTULO */}
            <h2 className="p1-title">
              AROMATIZANTE <br /> DE BLANCOS
            </h2>

            {/* DESCRIPCIÓN */}
            <p className="p1-text">
              Nuestros aromatizantes para blancos son la elección perfecta para crear 
              ambientes cautivadores. Con fragancias diseñadas para mezclarse 
              armoniosamente en espacios blancos, elevamos la experiencia sensorial 
              y el diseño interior, añadiendo un toque de lujo olfativo.
            </p>

            {/* BOTÓN */}
            <button className="p1-btn">Quiero hacer un pedido</button>

            {/* MODO DE USO */}
            <div className="p1-dropdown">
              <span>MODO DE USO</span>
              <span className="p1-drop-arrow">⌄</span>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 NUEVA SECCIÓN VA AQUÍ, DEBAJO DE TODO EL PRODUCTO */}
      <NuevaSeccion />
    </>
  );
};

export default Producto1Aromatizante;
