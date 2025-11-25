import "../styles/Footer.css";
import logo from "../assets/logo-xaan.jfif"; // 👉 CAMBIA al archivo real

export default function Footer() {
  return (
    <footer className="footer-section">

      {/* LOGO ARRIBA */}
      <img src={logo} alt="XA'AN" className="footer-logo" />

      {/* BLOQUE SUPERIOR (TEL — LINKS — CORREO) */}
      <div className="footer-top">
        <span className="footer-phone">998 240 3593</span>

        <nav className="footer-nav-top">
          <a href="#">Productos</a>
          <a href="#">Acerca de Xaan</a>
          <a href="#">Proceso</a>
          <a href="#">Mayoreo</a>
          <a href="#">Contacto</a>
        </nav>

        <span className="footer-email">hola@xaan.mx</span>
      </div>

      {/* LÍNEA DIVISORA */}
      <div className="footer-divider" />

      {/* PARTE INFERIOR (MUY ABAJO) */}
      <div className="footer-bottom">
        <a href="#">Aviso de privacidad</a>
        <a href="#">Términos y condiciones</a>
      </div>

    </footer>
  );
}
