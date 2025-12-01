import React from "react";
import "../../styles/Hom/LoMasPedido.css";

import img1 from "../../assets/web/imagen4.webp"; 
import img2 from "../../assets/web/imagen5.webp";
import img3 from "../../assets/web/imagen6.webp";

const LoMasPedido: React.FC = () => {
  return (
    <section className="section lomas-section" id="productos">

      <div className="section-wrapper">
        
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

            <h3 className="producto-nombre">
              ACEITE PARA <br /> MASAJE ENERGÍA
            </h3>

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

            <h3 className="producto-nombre">
              CREMA CORPORAL <br /> HUMECTANTE
            </h3>

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

            <h3 className="producto-nombre">
              AROMATIZANTE <br /> DE BLANCOS
            </h3>

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
      
      </div>

    </section>
  );
};

export default LoMasPedido;
