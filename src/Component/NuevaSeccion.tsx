import "../styles/NuevaSeccion.css";
import contactImg from "../assets/imagen9.jpg";

export default function NuevaSeccion() {
  return (
   <section className="contact-section">
  <div className="contact-wrapper">

    {/* BLOQUE DE IMAGEN AHORA A LA IZQUIERDA */}
    <div className="image-box">
      <img src={contactImg} className="contact-side-img" alt="contacto" />
    </div>

    {/* BLOQUE DE CONTACTO AHORA A LA DERECHA */}
    <div className="contact-box">
      <p className="contact-label">CONTACTA A UN ASESOR</p>

      <p className="contact-address">
        Colima 392, 2do. Piso Colonia Roma,<br />
        Delegación Cuauhtémoc C.P. 06700,<br />
        Ciudad de México.
      </p>

      <p className="contact-info">
        Tel. +52 998 87 7665 &nbsp; | &nbsp; email:hola@xaan.mx
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Teléfono" />
        <textarea placeholder="Mensaje"></textarea>
        <button className="contact-btn">Enviar</button>
      </form>
    </div>

  </div>
</section>

  );
}
