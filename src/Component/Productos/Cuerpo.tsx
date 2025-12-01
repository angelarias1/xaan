import React from "react";
import "../../styles/Categorias/Cuerpo.css";

// IMPORTA TUS IMÁGENES
import img1 from "../../assets/web/Categoria/iStock-1233.webp";
import img2 from "../../assets/web/Categoria/iStock-1332654793 1.webp";

const Cuerpo: React.FC = () => {
  return (
    <section className="cuerpo-section">

      <p className="cuerpo-mini">¿QUIÉNES SOMOS?</p>

      <div className="cuerpo-container">

        {/* IMÁGENES IZQUIERDA */}
        <div className="cuerpo-images">
          <img src={img1} alt="Exfoliante corporal natural" />
          <img src={img2} alt="Masaje relajante spa" />
        </div>

        {/* TEXTO DERECHA */}
        <div className="cuerpo-text">
          <h2>CUERPO</h2>

          <p>
            Embarca a tus clientes en un viaje sensorial a través de nuestra gama de
            productos para el cuidado corporal. Desde la frescura de la ducha hasta la
            caricia de las cremas hidratantes, cada uno de nuestros productos es un
            poema de bienestar. El cuerpo es un lienzo, y nuestros productos, las
            pinceladas de indulgencia que lo cuidan.
          </p>

          <a className="cuerpo-ver" href="#">
            VER PRODUCTOS →
          </a>

          <div className="cuerpo-list">
            <a href="#">FACIAL →</a>
            <a href="#">CORPORAL →</a>
            <a href="#">DUCHA →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cuerpo;
