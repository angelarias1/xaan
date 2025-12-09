import "../../styles/Hom/NuevaSeccion.css";
import contactImg from "../../assets/web/imagen9.webp";

export default function NuevaSeccion() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* BLOQUE DE IMAGEN */}
        <div className="image-box">
          <img
            src={contactImg}
            className="contact-side-img"
            alt="Asesoría personalizada y contacto de XA'AN Skin Care"
            loading="lazy"
          />
        </div>

        {/* BLOQUE DE CONTACTO */}
        <div className="contact-box">
          <div className="contact-inner">   {/* 🟢 AGREGADO */}

            <p className="contact-label">CONTACTA A UN ASESOR</p>

            <p className="contact-address">
              Colima 392, 2do. Piso Colonia Roma, Delegación Cuauhtémoc  
              C.P. 06700, Ciudad de México.
            </p>

            <p className="contact-info">
              Tel. +52 998 87 7665 | email: hola@xaan.mx
            </p>

            <form className="contact-form">
              <input type="text" placeholder="Nombre completo" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Teléfono" />
              <textarea placeholder="Mensaje"></textarea>
              <button className="contact-btn">Enviar</button>
            </form>

          </div> {/* 🟢 CIERRE contact-inner */}
        </div>

      </div>
    </section>
  );
}
