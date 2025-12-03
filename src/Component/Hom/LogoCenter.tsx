import React from "react";
import "../../styles/Hom/LogoCenter.css";

import logo from "../../assets/web/logo.webp"; // Cambia por tu archivo real

const LogoCenter: React.FC = () => {
  return (
    <section className="logo-center-section">
  <div className="logo-center-container">
    <img src={logo} alt="XA'AN Logo" className="logo-center-img" />
  </div>
</section>

  );
};

export default LogoCenter;
