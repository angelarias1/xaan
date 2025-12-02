import React from "react";
import "../../styles/Categorias/Funcionamos.css";

import funcionamosImg from "../../assets/web/Categoria/Rectangle 976.webp";

const Funcionamos: React.FC = () => {
  return (
    <section className="fun-section">
  <div className="fun-container">

    {/* BLOQUE SUPERIOR */}
    <div className="fun-top">

      <h2 className="fun-title">
        FUSIONAMOS LA <br />
        BELLEZA NATURAL CON <br />
        LA RESPONSABILIDAD <br />
        ECOLÓGICA
      </h2>

      <div className="fun-side-text">
        <h4 className="fun-side-title">¿QUÉ NOS INSPIRA?</h4>

        <p className="fun-side-desc">
          Nos aseguramos de que cada paso que damos en este viaje esté en armonía
          con la tierra que compartimos, y con el bienestar que deseamos para ti
          y tus clientes.
        </p>

        <a href="#" className="fun-link">
          VER PRODUCTOS →
        </a>
      </div>

    </div>

    {/* IMAGEN */}
    <div className="fun-img-box">
      <img
        src={funcionamosImg}
        className="fun-img"
        alt="Productos naturales y ecológicos de XA'AN Skin Care"
        loading="lazy"
      />
    </div>

  </div>
</section>


  );
};

export default Funcionamos;
