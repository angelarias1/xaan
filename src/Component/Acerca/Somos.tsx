import React from "react";

const Somos: React.FC = () => {
  return (
    <section id="somos" style={sectionStyle}>
      <h2 style={titleStyle}>Somos XA’AN</h2>
      <p style={textStyle}>
        Aquí podrás agregar una descripción general sobre lo que la marca representa.
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

export default Somos;
