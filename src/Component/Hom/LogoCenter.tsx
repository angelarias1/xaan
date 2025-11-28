import React from "react";
import "../../styles/LogoCenter.css";

import logo from "../../assets/web/logo.webp"; // Cambia por tu archivo real

const LogoCenter: React.FC = () => {
  return (
    <section className="logo-center-section">
      <img src={logo} alt="XA'AN Logo" className="logo-center-img" />
    </section>
  );
};

export default LogoCenter;
