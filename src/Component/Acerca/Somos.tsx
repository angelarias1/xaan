import React from "react";
import "../../styles/Acerca/Somos.css";

import somosImg from "../../assets/web/Acerca/Captura de Pantalla 2023-07-20 a la(s) 12.18 4.webp"; // ⭐ Reemplaza con tu imagen real

const Somos: React.FC = () => {
  return (
    <section className="somos-section">

      {/* Contenedor principal */}
      <div className="somos-container">

        {/* COLUMNA IZQUIERDA */}
        <div className="somos-left">

          <p className="somos-top-text">LO QUE NOS MUEVE</p>

          <h2 className="somos-title">
            SOMOS UNA<br />
            COMUNIDAD DE<br />
            INCLUSIÓN<br />
            SOSTENIBLE
          </h2>

          <p className="somos-description">
            Aportamos parte de nuestras ventas a distintas causas sociales,
            así como al medio ambiente y trabajamos en crear un consumo
            consciente en nuestros clientes, logrando un sistema de apoyo
            al medio ambiente.
          </p>

          <button className="somos-btn">Quiero hacer un pedido</button>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="somos-right">
          <img
            src={somosImg}
            alt="Somos XA'AN"
            className="somos-img"
          />
        </div>

      </div>
    </section>
  );
};

export default Somos;
