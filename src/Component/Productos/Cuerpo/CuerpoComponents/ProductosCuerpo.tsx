import React from "react";
import { Link } from "react-router-dom";
import "../CuerpoStyles/ProductosCuerpo.css";

// IMPORTA TUS 6 IMÁGENES
import img1 from "../../../../assets/web/imagen5.webp";
import img2 from "../../../../assets/web/imagen5.webp";
import img3 from "../../../../assets/web/imagen5.webp";
import img4 from "../../../../assets/web/imagen5.webp";
import img5 from "../../../../assets/web/imagen5.webp";
import img6 from "../../../../assets/web/imagen5.webp";

const ProductosCuer: React.FC = () => {
  return (
    <section className="cuer-section">
      <div className="cuer-container">

        {/* CARD 1 */}
        <article className="cuer-card">
          <Link to="/cuer/1">
            <img src={img1} alt="Producto corporal 1" className="cuer-img" />
          </Link>

          <span className="cuer-cat">CUERPO</span>

          <h3 className="cuer-name">PRODUCTO 1</h3>

          <span className="cuer-sub">PRESENTACIONES</span>

          <div className="cuer-options">
            <button>250 ml</button>
            <button>500 ml</button>
            <button>1 L</button>
          </div>

          <button className="cuer-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 2 */}
        <article className="cuer-card">
          <Link to="/cuer/2">
            <img src={img2} alt="Producto corporal 2" className="cuer-img" />
          </Link>

          <span className="cuer-cat">CUERPO</span>

          <h3 className="cuer-name">PRODUCTO 2</h3>

          <span className="cuer-sub">PRESENTACIONES</span>

          <div className="cuer-options">
            <button>250 ml</button>
            <button>500 ml</button>
            <button>1 L</button>
          </div>

          <button className="cuer-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 3 */}
        <article className="cuer-card">
          <Link to="/cuer/3">
            <img src={img3} alt="Producto corporal 3" className="cuer-img" />
          </Link>

          <span className="cuer-cat">CUERPO</span>

          <h3 className="cuer-name">PRODUCTO 3</h3>

          <span className="cuer-sub">PRESENTACIONES</span>

          <div className="cuer-options">
            <button>250 ml</button>
            <button>500 ml</button>
            <button>1 L</button>
          </div>

          <button className="cuer-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 4 */}
        <article className="cuer-card">
          <Link to="/cuer/4">
            <img src={img4} alt="Producto corporal 4" className="cuer-img" />
          </Link>

          <span className="cuer-cat">CUERPO</span>

          <h3 className="cuer-name">PRODUCTO 4</h3>

          <span className="cuer-sub">PRESENTACIONES</span>

          <div className="cuer-options">
            <button>250 ml</button>
            <button>500 ml</button>
            <button>1 L</button>
          </div>

          <button className="cuer-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 5 */}
        <article className="cuer-card">
          <Link to="/cuer/5">
            <img src={img5} alt="Producto corporal 5" className="cuer-img" />
          </Link>

          <span className="cuer-cat">CUERPO</span>

          <h3 className="cuer-name">PRODUCTO 5</h3>

          <span className="cuer-sub">PRESENTACIONES</span>

          <div className="cuer-options">
            <button>250 ml</button>
            <button>500 ml</button>
            <button>1 L</button>
          </div>

          <button className="cuer-order">Quiero hacer un pedido</button>
        </article>

        {/* CARD 6 */}
        <article className="cuer-card">
          <Link to="/cuer/6">
            <img src={img6} alt="Producto corporal 6" className="cuer-img" />
          </Link>

          <span className="cuer-cat">CUERPO</span>

          <h3 className="cuer-name">PRODUCTO 6</h3>

          <span className="cuer-sub">PRESENTACIONES</span>

          <div className="cuer-options">
            <button>250 ml</button>
            <button>500 ml</button>
            <button>1 L</button>
          </div>

          <button className="cuer-order">Quiero hacer un pedido</button>
        </article>

      </div>
    </section>
  );
};

export default ProductosCuer;
