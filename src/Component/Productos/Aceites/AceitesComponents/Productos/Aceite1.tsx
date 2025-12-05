import React from "react";
import { Link } from "react-router-dom";
import "../../AceitesStyles/ProductosStyles/AceitesProductos.css";

import imgAroma from "../../../../../assets/web/Ambiente.webp";
import flecha from "../../../../../assets/web/izquierda.webp";
import NuevaSeccion from "../../../../Hom/NuevaSeccion";

const Aceite1: React.FC = () => {
  return (
    <>
      <section className="p3-section">
        <div className="p3-container">

          {/* IZQUIERDA */}
          <div className="p3-left">
            <img src={imgAroma} alt="Aromatizante de Ambientes" className="p3-img" />
          </div>

          {/* DERECHA */}
          <div className="p3-right">

            {/* REGRESAR */}
            <div className="p3-back">
              <img src={flecha} alt="volver" className="p3-arrow" />
              <Link to="/aceites" className="p3-back-link">
                Aceites
              </Link>
            </div>

            {/* TÍTULO */}
            <h2 className="p3-title">
              AROMATIZANTE <br /> DE AMBIENTES
            </h2>

            {/* TEXTO */}
            <p className="p3-text">
              Diseñados para transformar cualquier espacio, nuestros aromatizantes
              de ambiente ofrecen fragancias intensas y duraderas que elevan la 
              experiencia sensorial. Perfectos para hoteles, spas y espacios de lujo.
            </p>

            {/* BOTÓN */}
            <button className="p3-btn">Quiero hacer un pedido</button>

            {/* DROPDOWN */}
            <div className="p3-dropdown">
              <span>MODO DE USO</span>
              <span className="p3-drop-arrow">⌄</span>
            </div>

          </div>
        </div>
      </section>

      <NuevaSeccion />
    </>
  );
};

export default Aceite1;
