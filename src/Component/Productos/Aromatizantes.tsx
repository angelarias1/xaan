import React from "react";
import "../../styles/Categorias/Aromatizantes.css";

import saunaImg from "../../assets/web/Categoria/Captura de Pantalla 2023-07-20 a la(s) 12.18 3.webp";
import velasImg from "../../assets/web/Categoria/iStock-1233.webp";

const Aromatizantes: React.FC = () => {
  return (
    <section className="aroma-section">
  <div className="aroma-container">

    {/* IZQUIERDA */}
    <div className="aroma-left">

      <h2 className="aroma-title">AROMATIZANTES</h2>

      <p className="aroma-paragraph">
        Cada fragancia es un susurro de emociones, una melodía de sensaciones
        que transforma tu espacio.
      </p>

      <p className="aroma-paragraph">
        Nuestros aromatizantes generan la atmósfera perfecta para tu espacio. Deja que cada aroma cuente su propia historia, que cada exhalación transporte a tus clientes a un lugar de serenidad y evocación. Permítenos ser la firma aromática de tus momentos, tejiendo recuerdos inolvidables en cada fragancia.
      </p>

      <a href="aromatizantes" className="aroma-link">
        VER PRODUCTOS →
      </a>

    </div>

    {/* DERECHA IMÁGENES */}
    <div className="aroma-right">

      <div className="aroma-small">
        <img src={velasImg} alt="Aromaterapia y velas relajantes" />
      </div>

      <div className="aroma-big">
        <img src={saunaImg} alt="Sauna aromática profesional" />
      </div>

    </div>

  </div>
</section>

  );
};

export default Aromatizantes;
