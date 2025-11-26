import "../styles/Footer.css";
import logo from "../assets/logo-xaan.jfif";

import icon1 from "../assets/f.svg";   // Facebook
import icon2 from "../assets/ig.svg";  // Instagram

export default function Footer() {
  // Función para copiar texto con tooltip dinámico
  const copiar = (selector: string, texto: string) => {
    navigator.clipboard.writeText(texto);
    const el = document.querySelector(selector) as HTMLElement;
    if (el) {
      el.setAttribute("data-text", "Copiado");
      setTimeout(() => el.setAttribute("data-text", "Copiar"), 1200);
    }
  };

  return (
    <footer className="footer-section">

      <img src={logo} alt="XA'AN" className="footer-logo" />

      <div className="footer-top">
        
        {/* TELÉFONO (COPIA + TOOLTIP) */}
        <div 
          className="footer-phone copy-txt"
          data-text="Copiar"
          onClick={() => copiar(".footer-phone", "9982403593")}
        >
          tel. +52 998 240 3593
        </div>

        {/* NAV SUPERIOR */}
        <nav className="footer-nav-top">
          <div className="dropdown">
            <button className="dropdown-btn">Productos</button>

            <div className="dropdown-menu">
              <a href="#">Aceites Naturales</a>
              <a href="#">Esencias Orgánicas</a>
              <a href="#">Aromaterapia Premium</a>
            </div>
          </div>

          <a href="#">Acerca de Xaan</a>
          <a href="#">Proceso</a>
          <a href="#">Mayoreo</a>
          <a href="#">Contacto</a>
        </nav>

        {/* EMAIL + ICONOS */}
        <div className="footer-right-group">

          {/* CORREO (COPIA + TOOLTIP) */}
          <div 
            className="footer-email copy-txt"
            data-text="Copiar"
            onClick={() => copiar(".footer-email", "hola@xaan.mx")}
          >
            hola@xaan.mx
          </div>

          {/* ÍCONOS */}
          <div className="footer-icons">
            <a 
              href="https://facebook.com"
              target="_blank"
              className="footer-icon-btn icon-tooltip"
              data-text="Facebook"
            >
              <img src={icon1} alt="Facebook" />
            </a>

            <a 
              href="https://instagram.com"
              target="_blank"
              className="footer-icon-btn icon-tooltip"
              data-text="Instagram"
            >
              <img src={icon2} alt="Instagram" />
            </a>
          </div>

        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <a href="#">Aviso de privacidad</a>
        <a href="#">Términos y condiciones</a>
      </div>

    </footer>
  );
}
