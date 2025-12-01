import React from "react";
import "../../styles/Categorias/Aromatizantes.css";

// IMPORTA TUS IMÁGENES
import aroma1 from "../../assets/web/Categoria/iStock-1233.webp";
import aroma2 from "../../assets/web/Categoria/Captura de Pantalla 2023-07-20 a la(s) 12.18 1.webp";

const Aromatizantes: React.FC = () => {
  return (
    <section className="aroma-section">

      <h2 className="aroma-title">AROMATIZANTES</h2>

      <div className="aroma-container">

        {/* TEXTO IZQUIERDA */}
        <div className="aroma-text">
          <p>
            Cada fragancia es un susurro de emociones, una melodía de sensaciones
            que transforma tu espacio.
          </p>

          <p>
            Nuestros aromatizantes generan la atmósfera perfecta para tu espacio.
            Deja que cada aroma cuente su propia historia, que cada exhalación
            transporte a tus clientes a un lugar de serenidad y evocación.
            Permítenos ser la firma aromática de tus momentos, tejiendo recuerdos
            inolvidables en cada fragancia.
          </p>

          <a href="#" className="aroma-ver">
            VER PRODUCTOS →
          </a>
        </div>

        {/* IMÁGENES */}
        <div className="aroma-images">
          <img src={aroma2} className="aroma-main" alt="Spa aromático" />
          <img src={aroma1} className="aroma-small" alt="Aromatizantes" />
        </div>

      </div>

      {/* SELLO / ICONO ABAJO IZQUIERDA */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Minimal_leaf_icon.svg/240px-Minimal_leaf_icon.svg.png"
        alt="Sello decorativo"
        className="aroma-seal"
      />
    </section>
  );
};

export default Aromatizantes;
