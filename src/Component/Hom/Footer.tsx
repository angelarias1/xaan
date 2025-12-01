import "../../styles/Hom/Footer.css";
import logo from "../../assets/web/logo-xaan.webp";

import icon1 from "../../assets/f.svg";   // Facebook
import icon2 from "../../assets/ig.svg";  // Instagram

export default function Footer() {
  const copiar = (selector: string, texto: string) => {
    navigator.clipboard.writeText(texto);
    const el = document.querySelector(selector) as HTMLElement;
    if (el) {
      el.setAttribute("data-text", "Copiado");
      setTimeout(() => el.setAttribute("data-text", "Copiar"), 1200);
    }
  };

  return (
    <footer className="section footer-section">
      
      {/* 🌟 Ahora todo está dentro del wrapper global */}
      <div className="section-wrapper">

        <img 
          src={logo} 
          alt="Logotipo de XA’AN, proveedor de amenidades naturales" 
          className="footer-logo" 
        />

        <div className="footer-top">
          
          {/* TELÉFONO */}
          <div
            className="footer-phone copy-txt"
            data-text="Copiar"
            onClick={() => copiar(".footer-phone", "9982403593")}
          >
            tel. +52 998 240 3593
          </div>

          {/* NAV */}
          <nav className="footer-nav-top">

            <div className="dropdown">
              <button className="dropdown-btn">Productos</button>

              <div className="dropdown-menu">
                <a href="#productos">Aceites Naturales</a>
                <a href="#productos">Esencias Orgánicas</a>
                <a href="#productos">Aromaterapia Premium</a>
              </div>
            </div>

            <a href="#acerca">Acerca de Xaan</a>
            <a href="#proceso">Proceso</a>
            <a href="#mayoreo">Mayoreo</a>
            <a href="#contacto">Contacto</a>
          </nav>

          {/* EMAIL + ICONOS */}
          <div className="footer-right-group">

            <div
              className="footer-email copy-txt"
              data-text="Copiar"
              onClick={() => copiar(".footer-email", "hola@xaan.mx")}
            >
              hola@xaan.mx
            </div>

            <div className="footer-icons">

              <a 
                href="https://facebook.com/xaan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icon-btn icon-tooltip"
                data-text="Facebook"
              >
                <img src={icon1} alt="Página oficial de XA’AN en Facebook" />
              </a>

              <a 
                href="https://instagram.com/xaan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icon-btn icon-tooltip"
                data-text="Instagram"
              >
                <img src={icon2} alt="Perfil de XA’AN en Instagram" />
              </a>

            </div>

          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <a href="/aviso-privacidad">Aviso de privacidad</a>
          <a href="/terminos-condiciones">Términos y condiciones</a>
        </div>

      </div>
    </footer>
  );
}
