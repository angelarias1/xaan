import React from "react";
import "../../styles/Proceso/NP.css";

// IMPORTA tus imágenes reales:
import npImg1 from "../../assets/web/Proceso/Rectangle 980.webp";
import npImg2 from "../../assets/web/Proceso/Rectangle 981.webp";

const NP: React.FC = () => {
  return (
    <section className="np-section">

      {/* CONTENEDOR DE IMÁGENES */}
      <div className="np-images">
        <img src={npImg1} alt="Proceso laboratorio" className="np-img" />
        <img src={npImg2} alt="Tecnología y control" className="np-img" />
      </div>

      {/* SECCIÓN INFERIOR */}
      <div className="np-bottom">

        {/* TÍTULO */}
        <p className="np-title">NUESTRO PROCESO</p>

        {/* BOTONES */}
        <div className="np-buttons">
          <button className="np-btn">{"<"}</button>
          <button className="np-btn">{">"}</button>
        </div>

        {/* CONTADOR */}
        <p className="np-counter">01 / 04</p>

      </div>

    </section>
  );
};

export default NP;
