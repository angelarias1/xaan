import React from "react";
import "../../styles/Categorias/Dedica.css";

import logo from "../../assets/web/icono.webp"; // cambia por tu logo real

const Dedica: React.FC = () => {
  return (
    <section className="dedica-section">
      <p className="dedica-text">
        DEDICA MOMENTOS A TI, TEJIDOS EN AROMAS<br />
        Y CARICIAS. DONDE LA AUTENTICIDAD DEL<br />
        CUIDADO PERSONAL COBRA VIDA.
      </p>

      <img src={logo} alt="XA'AN Logo" className="dedica-logo" />

      <p className="dedica-brand">XA'AN<br />SKIN CARE</p>
    </section>
  );
};

export default Dedica;
