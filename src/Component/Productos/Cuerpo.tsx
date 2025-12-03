import React from "react";
import { Link } from "react-router-dom"; 
import "../../styles/Categorias/Cuerpo.css";

// IMPORTA TUS IMÁGENES
import img1 from "../../assets/web/Categoria/iStock-1332654793 1.webp";
import img2 from "../../assets/web/Categoria/Captura de Pantalla 2023-07-20 a la(s) 12.18 1.webp";

const Cuerpo: React.FC = () => {
  return (
    <section className="cuerpo-section">

      <div className="cuerpo-container-main">

        {/* MINI-TÍTULO SUPERIOR */}
        <p className="cuerpo-mini">¿QUIÉNES SOMOS?</p>

        <div className="cuerpo-container">

          {/* IMÁGENES IZQUIERDA */}
          <div className="cuerpo-images">
            <img 
              src={img1} 
              alt="Productos naturales para el cuidado corporal – exfoliantes y aceites XA’AN"
              loading="lazy"
            />
            <img 
              src={img2} 
              alt="Tratamientos corporales relajantes para spa – XA’AN Skin Care"
              loading="lazy"
            />
          </div>

          {/* TEXTO DERECHA */}
          <div className="cuerpo-text">

            <h2 className="cuerpo-title">CUERPO</h2>

            <p>
              Embarca a tus clientes en un viaje sensorial a través de nuestra gama
              de productos para el cuidado corporal. Desde la frescura de la ducha
              hasta la caricia de las cremas hidratantes, cada uno de nuestros
              productos es un poema de bienestar. El cuerpo es un lienzo, y nuestros
              productos, las pinceladas de indulgencia que lo cuidan.
            </p>

            {/* BOTÓN QUE AHORA SÍ FUNCIONA */}
            <Link className="cuerpo-ver" to="/cuerpos">
              VER PRODUCTOS →
            </Link>

            <div className="cuerpo-list">
              <a href="#">FACIAL →</a>
              <a href="#">CORPORAL →</a>
              <a href="#">DUCHA →</a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Cuerpo;
