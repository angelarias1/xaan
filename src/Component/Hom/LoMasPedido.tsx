import React from "react";
import "../../styles/Hom/LoMasPedido.css";

import img1 from "../../assets/web/imagen4.webp";
import img2 from "../../assets/web/imagen5.webp";
import img3 from "../../assets/web/imagen6.webp";

const LoMasPedido: React.FC = () => {
  return (
    <section className="np-section">

      <div className="np-container">

        <h2 className="np-title">LO MÁS PEDIDO</h2>

        <div className="np-grid">

          {/* PRODUCTO 1 */}
          <article className="np-card">
            <img
              src={img1}
              alt="Aceite para masaje Energía"
              className="np-img"
              loading="lazy"
            />

            <span className="np-cat">ACEITES</span>

            <h3 className="np-name">
              ACEITE PARA <br /> MASAJE ENERGÍA
            </h3>

            <span className="np-sub">PRESENTACIONES</span>

            <div className="np-options">
              <span>1 L.</span>
              <span>4 L.</span>
              <span>20 L.</span>
            </div>

            <button className="np-btn">Quiero hacer un pedido</button>
          </article>

          {/* PRODUCTO 2 */}
          <article className="np-card">
            <img
              src={img2}
              alt="Crema corporal humectante"
              className="np-img"
              loading="lazy"
            />

            <span className="np-cat">CUERPO</span>

            <h3 className="np-name">
              CREMA CORPORAL <br /> HUMECTANTE
            </h3>

            <span className="np-sub">PRESENTACIONES</span>

            <div className="np-options">
              <span>1 L.</span>
              <span>4 L.</span>
              <span>20 L.</span>
            </div>

            <button className="np-btn">Quiero hacer un pedido</button>
          </article>

          {/* PRODUCTO 3 */}
          <article className="np-card">
            <img
              src={img3}
              alt="Aromatizante de blancos"
              className="np-img"
              loading="lazy"
            />

            <span className="np-cat">AROMATIZANTES</span>

            <h3 className="np-name">
              AROMATIZANTE <br /> DE BLANCOS
            </h3>

            <span className="np-sub">PRESENTACIONES</span>

            <div className="np-options">
              <span>1 L.</span>
              <span>4 L.</span>
              <span>20 L.</span>
            </div>

            <button className="np-btn">Quiero hacer un pedido</button>
          </article>

        </div>

        <p className="np-warning">
          Aviso importante: Imágenes ilustrativas. Presentación varía según cantidad adquirida.
        </p>

      </div>

    </section>
  );
};

export default LoMasPedido;
