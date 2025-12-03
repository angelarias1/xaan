import React from "react";
import { Link } from "react-router-dom";
import "../../AromaStyles/ProductosStyles/AromaBlanco.css";

import imgAroma from "../../../../../assets/web/Difusor.webp";
import flecha from "../../../../../assets/web/izquierda.webp";
import NuevaSeccion from "../../../../Hom/NuevaSeccion";

const Producto3Aromatizante: React.FC = () => {
  return (
    <>
      <section className="p1-section">
        <div className="p1-container">

          {/* IZQUIERDA */}
          <div className="p1-left">
            <img src={imgAroma} alt="Difusor Aromático" className="p1-img" />
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
              DIFUSORES <br /> AROMÁTICOS
            </h2>

            {/* TEXTO */}
            <p className="p1-text">
              Nuestros difusores liberan fragancias de manera constante y elegante.
              Ideales para crear ambientes que transmiten serenidad, lujo y bienestar
              sin necesidad de aerosoles o intervención manual.
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

export default Producto3Aromatizante;
