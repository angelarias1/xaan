import React from "react";
import "../../styles/Proceso/Ballet.css";

import balletImg from "../../assets/web/Proceso/Rectangle 976 (1).webp";

const Ballet: React.FC = () => {
  return (
   <section className="ballet-section">

  {/* CONTENEDOR SUPERIOR */}
  <div className="ballet-container">

    <div className="ballet-top">

      {/* IZQUIERDA */}
      <div className="ballet-left">
        <h2 className="ballet-title">
          NUESTROS PROCESOS SON UN BALLET<br />
          ARMONIOSO DONDE LA CIENCIA Y LA<br />
          ESENCIA SE ENTRELAZAN PARA<br />
          OFRECERTE PRODUCTOS DE LA MÁS<br />
          ALTA CALIDAD
        </h2>
      </div>

      {/* DERECHA */}
      <div className="ballet-right">
        <p className="ballet-paragraph">
          A través de una cuidadosa alquimia, unimos los tesoros de la tierra con las
          maravillas tecnológicas, permitiendo que la naturaleza inspire cada fórmula.
          Descubre la magia de esta conexión única mientras te sumerges en un universo
          de bienestar y cuidado auténtico.
        </p>
      </div>

    </div>

    {/* IMAGEN INFERIOR */}
    <div className="ballet-img-box">
      <img
        src={balletImg}
        alt="Proceso armonioso entre ciencia y naturaleza – XA'AN Skin Care"
        className="ballet-img"
        loading="lazy"
      />
    </div>

  </div>
</section>

  );
};

export default Ballet;
