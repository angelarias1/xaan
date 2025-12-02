import React from "react";
import "../../styles/Categorias/Aceite.css";

import aceiteImg from "../../assets/web/Categoria/Rectangle 979.webp";
import selloImg from "../../assets/web/icono.webp"; // sello real importado

const Aceites: React.FC = () => {
  return (
   <section className="aceite-section">
  <div className="aceite-container-main">

    {/* TÍTULO */}
    <h2 className="aceite-title">ACEITES</h2>

    <div className="aceite-container">

      {/* SELLO IZQUIERDA */}
      <img
        src={selloImg}
        alt="Decoración sello de XA’AN"
        className="aceite-seal"
      />

      {/* TEXTO */}
      <div className="aceite-text">
        <p>
          Explora nuestros aceites corporales, el elixir de cuidado que toda piel
          anhela. Creados para nutrir y rejuvenecer, cada gota es un abrazo
          de hidratación. Desde revitalizantes mezclas hasta aromas relajantes,
          nuestros aceites son indulgencia líquida. Regala a tu piel el lujo de un
          toque suave y radiante.
        </p>

        <a href="#" className="aceite-ver">
          VER PRODUCTOS →
        </a>
      </div>

      {/* IMAGEN */}
      <div className="aceite-img-box">
        <img
          src={aceiteImg}
          alt="Aceites corporales XA’AN"
          className="aceite-img"
        />
      </div>

    </div>

  </div>
</section>

  );
};

export default Aceites;
