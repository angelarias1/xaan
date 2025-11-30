import React from "react";

const Nosmueve: React.FC = () => {
  return (
    <section id="nosmueve" style={sectionStyle}>
      <h2 style={titleStyle}>¿Qué Nos Mueve?</h2>
      <p style={textStyle}>
        Este espacio puede describir valores, filosofía y motivaciones detrás de XA’AN.
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

export default Nosmueve;
