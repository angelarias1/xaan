import React from "react";
import { Link } from "react-router-dom";
import "../../AromaStyles/ProductosStyles/AromasProductos.css";

import imgAroma from "../../../../../assets/web/Ambiente.webp";
import flecha from "../../../../../assets/web/izquierda.webp";
import NuevaSeccion from "../../../../Hom/NuevaSeccion";

const Producto2Aromatizante: React.FC = () => {
  return (
    <>
      <section className="p1-section">
        <div className="p1-container">

          {/* IZQUIERDA */}
          <div className="p1-left">
            <img src={imgAroma} alt="Aromatizante de Ambientes" className="p1-img" />
          </div>

          {/* DERECHA */}
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
              AROMATIZANTE <br /> DE AMBIENTES
            </h2>

            {/* TEXTO */}
            <p className="p1-text">
              Diseñados para transformar cualquier espacio, nuestros aromatizantes
              de ambiente ofrecen fragancias intensas y duraderas que elevan la 
              experiencia sensorial. Perfectos para hoteles, spas y espacios de lujo.
            </p>

            {/* BOTÓN */}
            <button className="p1-btn">Quiero hacer un pedido</button>

            {/* DROPDOWN */}
            <div className="p1-dropdown">
              <span>MODO DE USO</span>
              <span className="p1-drop-arrow">⌄</span>
            </div>

          </div>
        </div>
      </section>

      <NuevaSeccion />
    </>
  );
};

export default Producto2Aromatizante;
