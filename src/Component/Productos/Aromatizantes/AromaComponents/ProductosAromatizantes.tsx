import React from "react";
import { Link } from "react-router-dom";
import "../AromaStyles/ProductosAromatizantes.css";

import img1 from "../../../../assets/web/AB.webp";
import img2 from "../../../../assets/web/AA.webp";
import img3 from "../../../../assets/web/Difusor1.webp";

const ProductosAromatizantes: React.FC = () => {
  return (
    <section className="pa-section">
      <div className="pa-container">

        {/* CARD 1 */}
        <article className="pa-card">
          <Link to="/aromatizantes/blancos">
            <img src={img1} alt="Aromatizante de blancos" className="pa-img" />
          </Link>

          <span className="pa-cat">AROMATIZANTES</span>

          <h3 className="pa-name">
            AROMATIZANTE <br /> DE BLANCOS
          </h3>

          <span className="pa-sub">PRESENTACIONES</span>

          <div className="pa-options">
            <button>1 L.</button>
            <button>4 L.</button>
            <button>20 L.</button>
          </div>

          <button className="pa-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 2 */}
        <article className="pa-card">
          <Link to="/aromatizantes/ambientes">
            <img src={img2} alt="Aromatizante de ambientes" className="pa-img" />
          </Link>

          <span className="pa-cat">AROMATIZANTES</span>

          <h3 className="pa-name">
            AROMATIZANTE <br /> DE AMBIENTES
          </h3>

          <span className="pa-sub">PRESENTACIONES</span>

          <div className="pa-options">
            <button>1 L.</button>
            <button>4 L.</button>
            <button>20 L.</button>
          </div>

          <button className="pa-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 3 */}
        <article className="pa-card">
          <Link to="/aromatizantes/difusores">
            <img src={img3} alt="Difusores" className="pa-img" />
          </Link>

          <span className="pa-cat">AROMATIZANTES</span>

          <h3 className="pa-name">DIFUSORES</h3>

          <span className="pa-sub">PRESENTACIONES</span>

          <div className="pa-options">
            <button>1 L.</button>
            <button>4 L.</button>
            <button>20 L.</button>
          </div>

          <button className="pa-order">Quiero hacer un pedido</button>
        </article>

      </div>
    </section>
  );
};

export default ProductosAromatizantes;
