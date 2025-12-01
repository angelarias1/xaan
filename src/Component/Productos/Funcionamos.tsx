import React from "react";
import "../../styles/Categorias/Funcionamos.css";

// Cambia por tu imagen real
import funcionamosImg from "../../assets/web/Categoria/Rectangle 976.webp";

const Funcionamos: React.FC = () => {
  return (
    <section className="fun-section">

      {/* Texto grande */}
      <h2 className="fun-title">
        FUSIONAMOS LA<br />
        BELLEZA NATURAL CON<br />
        LA RESPONSABILIDAD<br />
        ECOLÓGICA
      </h2>

      <div className="fun-container">

        {/* Imagen */}
        <div className="fun-img-box">
          <img src={funcionamosImg} className="fun-img" alt="Productos spa" />
        </div>

        {/* Texto lateral */}
        <div className="fun-side-text">
          <h4>¿QUÉ NOS INSPIRA?</h4>

          <p>
            Nos aseguramos que cada paso que damos en esta viaje esté en armonía con la tierra que compartimos y
            con el bienestar que deseamos para ti y tus clientes.
          </p>

          <a className="fun-link" href="#">
            VER PRODUCTOS →
          </a>

        </div>

      </div>

    </section>
  );
};

export default Funcionamos;
