import React from "react";
import { Link } from "react-router-dom";
import "../../CuerpoStyles/ProductosStyles/CuerpoProductos.css";

import imgAroma from "../../../../../assets/web/Ambiente.webp";
import flecha from "../../../../../assets/web/izquierda.webp";
import NuevaSeccion from "../../../../Hom/NuevaSeccion";

const Cuerpo1: React.FC = () => {
  return (
    <>
      <section className="p2-section">
        <div className="p2-container">

          {/* IZQUIERDA */}
          <div className="p2-left">
            <img src={imgAroma} alt="Aromatizante de Ambientes" className="p2-img" />
          </div>

          {/* DERECHA */}
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
              AROMATIZANTE <br /> DE AMBIENTES
            </h2>

            {/* TEXTO */}
            <p className="p2-text">
              Diseñados para transformar cualquier espacio, nuestros aromatizantes
              de ambiente ofrecen fragancias intensas y duraderas que elevan la 
              experiencia sensorial. Perfectos para hoteles, spas y espacios de lujo.
            </p>

            {/* BOTÓN */}
            <button className="p2-btn">Quiero hacer un pedido</button>

            {/* DROPDOWN */}
            <div className="p2-dropdown">
              <span>MODO DE USO</span>
              <span className="p2-drop-arrow">⌄</span>
            </div>

          </div>
        </div>
      </section>

      <NuevaSeccion />
    </>
  );
};

export default Cuerpo1;
