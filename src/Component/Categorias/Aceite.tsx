import React from "react";
import "../styles/Aceite.css";

// IMPORTA TU IMAGEN AQUÍ
import aceiteImg from "../assets/aceite-section.webp"; // cámbiala por la tuya

const Aceite: React.FC = () => {
  return (
    <section className="aceite-section">
      <div className="aceite-container">

        {/* TEXTO IZQUIERDA */}
        <div className="aceite-left">
          <h2 className="aceite-title">
            FUSIONAMOS LA<br />
            BELLEZA NATURAL CON<br />
            LA RESPONSABILIDAD<br />
            ECOLÓGICA
          </h2>

          <div className="aceite-right-mini">
            <h4 className="aceite-sub">¿QUÉ NOS INSPIRA?</h4>

            <p className="aceite-desc">
              Nos aseguramos que cada paso que<br />
              damos en este viaje esté en armonía<br />
              con la tierra que compartimos y con<br />
              el bienestar que deseamos para ti y<br />
              tus clientes.
            </p>

            <a href="#" className="aceite-link">
              VER PRODUCTOS →
            </a>
          </div>
        </div>

        {/* IMAGEN DERECHA */}
        <div className="aceite-right-img">
          <img src={aceiteImg} alt="Aceites naturales de XA'AN" />
        </div>

      </div>
    </section>
  );
};

export default Aceite;
