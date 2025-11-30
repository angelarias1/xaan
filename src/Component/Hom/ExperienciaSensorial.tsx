import React from "react";
import "../../styles/Hom/Sensorial.css";
import imagen from "../../assets/web/imagen.webp"; // 👈 IMPORTA LA IMAGEN

const Sensorial: React.FC = () => {
  return (
    <section className="sensorial-section">

      <div className="sensorial-container">

        {/* IZQUIERDA CON IMAGEN */}
        <div className="sensorial-left">
          <div className="sensorial-image-wrapper">
            <img
              src={imagen}
              alt="Persona disfrutando una experiencia sensorial con productos XA’AN"
              className="sensorial-image"
            />
          </div>
        </div>

        {/* DERECHA */}
        <div className="sensorial-right">

          <h3 className="sensorial-title">
            CREAMOS EN 
            TUS CLIENTES <br />
            UNA EXPERIENCIA <br />
            SENSORIAL
          </h3>

          <p className="sensorial-text">
            {`Gracias a los aromas y fórmula de nuestros productos
que eliminan los malos olores y genera un ambiente
característico en tu negocio. Nuestros productos están
elaborados a base de ingredientes naturales, saludables
y con los más altos estándares de calidad.`}
          </p>

          <button className="sensorial-btn">
            Quiero hacer un pedido
          </button>

        </div>

      </div>

    </section>
  );
};

export default Sensorial;
