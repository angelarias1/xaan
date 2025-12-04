import React from "react";
import { Link } from "react-router-dom";
import "../AceitesStyles/AceitesProductos.css";

import img1 from "../../../../assets/web/imagen10.webp";
import img2 from "../../../../assets/web/imagen5.webp";
import img3 from "../../../../assets/web/imagen6.webp";

const AceitesProductos: React.FC = () => {
  return (
    <section className="ac-section">
      <div className="ac-container">

        {/* CARD 1 */}
        <article className="ac-card">
          <Link to="/aceites/blancos">
            <img src={img1} alt="Aceite corporal de blancos" className="ac-img" />
          </Link>

          <span className="ac-cat">ACEITES</span>

          <h3 className="ac-name">
            ACEITE <br /> DE BLANCOS
          </h3>

          <span className="ac-sub">PRESENTACIONES</span>

          <div className="ac-options">
            <button>1 L.</button>
            <button>4 L.</button>
            <button>20 L.</button>
          </div>

          <button className="ac-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 2 */}
        <article className="ac-card">
          <Link to="/aceites/ambientes">
            <img src={img2} alt="Aceite corporal de ambientes" className="ac-img" />
          </Link>

          <span className="ac-cat">ACEITES</span>

          <h3 className="ac-name">
            ACEITE <br /> DE AMBIENTES
          </h3>

          <span className="ac-sub">PRESENTACIONES</span>

          <div className="ac-options">
            <button>1 L.</button>
            <button>4 L.</button>
            <button>20 L.</button>
          </div>

          <button className="ac-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 3 */}
        <article className="ac-card">
          <Link to="/aceites/difusores">
            <img src={img3} alt="Difusores de aromas XA’AN" className="ac-img" />
          </Link>

          <span className="ac-cat">ACEITES</span>

          <h3 className="ac-name">DIFUSORES</h3>

          <span className="ac-sub">PRESENTACIONES</span>

          <div className="ac-options">
            <button>1 L.</button>
            <button>4 L.</button>
            <button>20 L.</button>
          </div>

          <button className="ac-order">Quiero hacer un pedido</button>
        </article>

      </div>
    </section>
  );
};

export default AceitesProductos;
