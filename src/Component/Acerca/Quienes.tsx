import React from "react";

const Quienes: React.FC = () => {
  return (
    <section id="quienes" style={sectionStyle}>
      <h2 style={titleStyle}>¿Quiénes Somos?</h2>
      <p style={textStyle}>
        Esta es una sección de referencia para describir la esencia y propósito de la marca.
      </p>
    </section>
  );
};

const sectionStyle: React.CSSProperties = {
  width: "100%",
  padding: "80px 5%",
  background: "#e2d9d2",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2rem",
  color: "#805b4a",
  marginBottom: "12px",
};

const textStyle: React.CSSProperties = {
  maxWidth: "600px",
  fontSize: "1.1rem",
  lineHeight: "1.5",
};

export default Quienes;
