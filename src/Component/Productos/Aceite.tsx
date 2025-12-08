import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Categorias/Aceite.css";

import aceiteImg from "../../assets/web/Categoria/Rectangle 979.webp";
import selloImg from "../../assets/web/icono.webp";

const Aceites: React.FC = () => {
  return (
    <section className="aceite-section">
      <div className="aceite-container-main">

        {/* CONTENEDOR 2 COLUMNAS REALES */}
        <div className="aceite-columns">

          {/* IZQUIERDA — SOLO SELLO */}
          <div className="aceite-left">
            <img 
              src={selloImg} 
              alt="Decoración sello XA’AN" 
              className="aceite-seal"
            />
          </div>

          {/* DERECHA — TODO EL CONTENIDO */}
          <div className="aceite-right">

            <h2 className="aceite-title">ACEITES</h2>

            <p className="aceite-paragraph">
              Explora nuestros aceites corporales, el elixir de cuidado que toda piel
              anhela. Creados para nutrir y rejuvenecer, cada gota es un abrazo
              de hidratación. Desde revitalizantes mezclas hasta aromas relajantes,
              nuestros aceites son indulgencia líquida. Regala a tu piel el lujo de un
              toque suave y radiante.
            </p>

            <Link to="/aceites" className="aceite-ver">
              VER PRODUCTOS →
            </Link>

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

      </div>
    </section>
  );
};

export default Aceites;
