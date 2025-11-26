import "../styles/Footer.css";
import logo from "../assets/logo-xaan.jfif";

// 👉 Iconos
import icon1 from "../assets/f.svg";   // Facebook
import icon2 from "../assets/ig.svg"; // Instagram

export default function Footer() {

  // 👉 Función para copiar el número
  const copyPhone = () => {
    navigator.clipboard.writeText("+52 998 240 3593");
    alert("Número copiado: +52 998 240 3593");
  };

  return (
    <footer className="footer-section">

      {/* LOGO ARRIBA */}
      <img src={logo} alt="XA'AN" className="footer-logo" />

      {/* BLOQUE SUPERIOR */}
      <div className="footer-top">

        {/* 🔥 TELÉFONO CON COPIAR AL HACER CLIC */}
        <span className="footer-phone" onClick={copyPhone}>
          tel. +52 998 240 3593
        </span>

        {/* NAV SUPERIOR */}
        <nav className="footer-nav-top">

          {/* Dropdown de productos */}
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
          <span className="footer-email">hola@xaan.mx</span>

          <div className="footer-icons">

            {/* 🔥 FACEBOOK */}
            <button
              className="footer-icon-btn"
              onClick={() => window.open("https://facebook.com", "_blank")}
            >
              <img src={icon1} alt="Facebook" />
            </button>

            {/* 🔥 INSTAGRAM */}
            <button
              className="footer-icon-btn"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <img src={icon2} alt="Instagram" />
            </button>

          </div>
        </div>
      </div>

      {/* LINEA */}
      <div className="footer-divider" />

      {/* PARTE FINAL */}
      <div className="footer-bottom">
        <a href="#">Aviso de privacidad</a>
        <a href="#">Términos y condiciones</a>
      </div>

    </footer>
  );
}
