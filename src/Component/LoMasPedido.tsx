import React from "react";
import "../styles/LoMasPedido.css";

import img1 from "../assets/imagen4.jpg"; 
import img2 from "../assets/imagen5.jpg";
import img3 from "../assets/imagen6.jpg";

const LoMasPedido: React.FC = () => {
  return (
    <section className="lomas-section" id="productos">

      {/* TÍTULO SEO */}
      <h2 className="lomas-title">LO MÁS PEDIDO</h2>

      <div className="lomas-grid">

        {/* PRODUCTO 1 */}
        <article className="producto-card">
          <img 
            src={img1} 
            className="producto-img"
            alt="Aceite para masaje Energía – presentaciones de 1L, 4L y 20L"
            loading="lazy"
          />

          <span className="producto-cat">ACEITES</span>

          <h3 className="producto-nombre">ACEITE PARA MASAJE ENERGÍA</h3>

          <span className="producto-sub">PRESENTACIONES</span>

          <div className="producto-opciones">
            <span>1 L.</span>
            <span>4 L.</span>
            <span>20 L.</span>
          </div>

          <button className="producto-btn">Quiero hacer un pedido</button>
        </article>

        {/* PRODUCTO 2 */}
        <article className="producto-card">
          <img
            src={img2}
            className="producto-img"
            alt="Crema corporal humectante – presentaciones de 1L, 4L y 20L"
            loading="lazy"
          />

          <span className="producto-cat">CUERPO</span>

          <h3 className="producto-nombre">CREMA CORPORAL HUMECTANTE</h3>

          <span className="producto-sub">PRESENTACIONES</span>

          <div className="producto-opciones">
            <span>1 L.</span>
            <span>4 L.</span>
            <span>20 L.</span>
          </div>

          <button className="producto-btn">Quiero hacer un pedido</button>
        </article>

        {/* PRODUCTO 3 */}
        <article className="producto-card">
          <img
            src={img3}
            className="producto-img"
            alt="Aromatizante de blancos – presentaciones de 1L, 4L y 20L"
            loading="lazy"
          />

          <span className="producto-cat">AROMATIZANTES</span>

          <h3 className="producto-nombre">AROMATIZANTE DE BLANCOS</h3>

          <span className="producto-sub">PRESENTACIONES</span>

          <div className="producto-opciones">
            <span>1 L.</span>
            <span>4 L.</span>
            <span>20 L.</span>
          </div>

          <button className="producto-btn">Quiero hacer un pedido</button>
        </article>

      </div>

      <p className="lomas-aviso">
        Aviso importante: Imágenes ilustrativas. Presentación varía según cantidad adquirida.
      </p>

    </section>
  );
};

export default LoMasPedido;
