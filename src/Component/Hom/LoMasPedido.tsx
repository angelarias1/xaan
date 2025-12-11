import React from "react";
import "../../styles/Hom/LoMasPedido.css";

import img1 from "../../assets/web/imagen4.webp";
import img2 from "../../assets/web/imagen5.webp";
import img3 from "../../assets/web/imagen6.webp";

const LoMasPedido: React.FC = () => {
  return (
    <section className="nppn-section">

      <div className="nppn-container">

        <h2 className="nppn-title">LO MÁS PEDIDO</h2>

        <div className="nppn-grid">

          {/* PRODUCTO 1 */}
          <article className="nppn-card">
            <img
              src={img1}
              alt="Aceite para masaje Energía"
              className="nppn-img"
              loading="lazy"
            />

            <span className="nppn-cat">ACEITES</span>

            <h3 className="nppn-name">
              ACEITE PARA <br /> MASAJE ENERGÍA
            </h3>

            <span className="nppn-sub">PRESENTACIONES</span>

            <div className="nppn-options">
              <span>1 L.</span>
              <span>4 L.</span>
              <span>20 L.</span>
            </div>

            <button className="nppn-btn">Quiero hacer un pedido</button>
          </article>

          {/* PRODUCTO 2 */}
          <article className="nppn-card">
            <img
              src={img2}
              alt="Crema corporal humectante"
              className="nppn-img"
              loading="lazy"
            />

            <span className="nppn-cat">CUERPO</span>

            <h3 className="nppn-name">
              CREMA CORPORAL <br /> HUMECTANTE
            </h3>

            <span className="nppn-sub">PRESENTACIONES</span>

            <div className="nppn-options">
              <span>1 L.</span>
              <span>4 L.</span>
              <span>20 L.</span>
            </div>

            <button className="nppn-btn">Quiero hacer un pedido</button>
          </article>

          {/* PRODUCTO 3 */}
          <article className="nppn-card">
            <img
              src={img3}
              alt="Aromatizante de blancos"
              className="nppn-img"
              loading="lazy"
            />

            <span className="nppn-cat">AROMATIZANTES</span>

            <h3 className="nppn-name">
              AROMATIZANTE <br /> DE BLANCOS
            </h3>

            <span className="nppn-sub">PRESENTACIONES</span>

            <div className="nppn-options">
              <span>1 L.</span>
              <span>4 L.</span>
              <span>20 L.</span>
            </div>

            <button className="nppn-btn">Quiero hacer un pedido</button>
          </article>

        </div>

        <p className="nppn-warning">
          Aviso importante: Imágenes ilustrativas. Presentación varía según cantidad adquirida.
        </p>

      </div>

    </section>
  );
};

export default LoMasPedido;
