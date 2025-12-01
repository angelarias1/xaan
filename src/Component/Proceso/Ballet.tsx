import React from "react";
import "../../styles/Proceso/Ballet.css";

import balletImg from "../../assets/web/Proceso/Rectangle 976 (1).webp";

const Ballet: React.FC = () => {
  return (
    <section className="ballet-section">

      {/* CONTENEDOR SUPERIOR (TEXTOS) */}
      <div className="ballet-top">
        
        {/* TEXTO IZQUIERDA */}
        <div className="ballet-left">
          <p className="ballet-title">
            NUESTROS PROCESOS SON UN BALLET<br />
            ARMONIOSO DONDE LA CIENCIA Y LA<br />
            ESENCIA SE ENTRELAZAN PARA<br />
            OFRECERTE PRODUCTOS DE LA MÁS ALTA<br />
            CALIDAD
          </p>
        </div>

        {/* TEXTO DERECHA */}
        <div className="ballet-right">
          <p className="ballet-paragraph">
            A través de una cuidadosa alquimia, unimos los tesoros de la Tierra 
            con las maravillas tecnológicas, permitiendo que la naturaleza 
            inspire y guíe cada fórmula que creamos. Descubre la magia de 
            esta conexión única mientras te sumerges en un universo de 
            bienestar y cuidado auténtico.
          </p>
        </div>

      </div>

      {/* IMAGEN INFERIOR */}
      <div className="ballet-img-box">
        <img src={balletImg} alt="Ballet proceso natural" className="ballet-img" />
      </div>

    </section>
  );
};

export default Ballet;
