import React from "react";
import "../../styles/Categorias/Dedica.css";

import logo from "../../assets/web/icono.webp";

const Dedica: React.FC = () => {
  return (
    <section className="dedica-section">

      <div className="dedica-wrapper">

        {/* TEXTO PRINCIPAL */}
        <p className="dedica-text">
          DEDICA MOMENTOS A TI, TEJIDOS EN AROMAS <br />
          Y CARICIAS, DONDE LA AUTENTICIDAD DEL <br />
          CUIDADO PERSONAL COBRA VIDA.
        </p>

        {/* LOGO */}
        <img 
          src={logo} 
          alt="Sello representativo de XA'AN Skin Care" 
          className="dedica-logo"
          loading="lazy"
        />

        {/* MARCA */}
        <p className="dedica-brand">
          XA’AN <br />
          SKIN CARE
        </p>

      </div>
    </section>
  );
};

export default Dedica;
