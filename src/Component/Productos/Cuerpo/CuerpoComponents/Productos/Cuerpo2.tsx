import React from "react";
import { Link } from "react-router-dom";
import "../../CuerpoStyles/ProductosStyles/CuerpoProductos.css";

import imgAroma from "../../../../../assets/web/imagen5.webp";
import flecha from "../../../../../assets/web/izquierda.webp";
import NuevaSeccion from "../../../../Hom/NuevaSeccion";

const Cuerpo2: React.FC = () => {
  return (
    <>
      <section className="p2-section">
        <div className="p2-container">

          {/* IZQUIERDA */}
          <div className="p2-left">
            <img src={imgAroma} alt="Difusor Aromático" className="p2-img" />
          </div>

          {/* DERECHA */}
          <div className="p2-right">

            {/* REGRESAR */}
            <div className="p2-back">
              <img src={flecha} alt="volver" className="p2-arrow" />
              <Link to="/cuerpos" className="p2-back-link">
                Cuerpos
              </Link>
            </div>

            {/* TÍTULO */}
            <h2 className="p2-title">
              DIFUSORES <br /> AROMÁTICOS
            </h2>

            {/* TEXTO */}
            <p className="p2-text">
              Nuestros difusores liberan fragancias de manera constante y elegante.
              Ideales para crear ambientes que transmiten serenidad, lujo y bienestar
              sin necesidad de aerosoles o intervención manual.
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

export default Cuerpo2;
