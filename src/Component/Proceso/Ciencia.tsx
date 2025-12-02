import React from "react";
import "../../styles/Proceso/Ciencia.css";
import cienciaImg from "../../assets/web/Proceso/Captura de Pantalla 2023-07-20 a la(s) 12.18 4 (1).webp";

const Ciencia: React.FC = () => {
  return (
  <section className="ciencia-section">
  <div className="ciencia-container">

    {/* IZQUIERDA */}
    <div className="ciencia-left">

      <p className="ciencia-small">UNIÓN ARMÓNICA</p>

      <h2 className="ciencia-title">
        CIENCIA Y<br />
        NATURALEZA<br />
        EN NUESTROS<br />
        PRODUCTOS
      </h2>

      <p className="ciencia-text">
        Hemos logrado fusionar la riqueza de la naturaleza con las fronteras
        de la tecnología actual, creando así una sinergia excepcional entre
        lo natural y lo innovador.
      </p>

      <button className="ciencia-btn">Quiero hacer un pedido</button>
    </div>

    {/* DERECHA */}
    <div className="ciencia-right">
      <img
        src={cienciaImg}
        alt="Ingredientes naturales"
        className="ciencia-img"
      />
    </div>

  </div>
</section>

  );
};

export default Ciencia;
