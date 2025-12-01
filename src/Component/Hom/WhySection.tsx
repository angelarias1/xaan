import React, { useState } from "react";
import "../../styles/Hom/WhySection.css";

const items = [
  {
    title: "Nuestros productos son de origen vegetal",
    content:
      "Todos nuestros ingredientes provienen de fuentes naturales y responsables, garantizando productos más puros, seguros y libres de químicos agresivos."
  },
  {
    title: "Cuidamos al medio ambiente",
    content:
      "Nuestras fórmulas y empaques han sido creados bajo un enfoque sustentable, reduciendo residuos y apoyando prácticas que respetan la biodiversidad."
  },
  {
    title: "Creamos fórmulas a través de productos naturales",
    content:
      "Cada producto se elabora con extractos naturales seleccionados por su eficacia, aroma y beneficios para la piel."
  },
  {
    title: "Eliminamos cualquier tipo de maltrato animal",
    content:
      "Todos los procesos de producción están certificados como libres de crueldad, asegurando que ningún animal sea utilizado para pruebas."
  },
  {
    title: "Parte de tu compra apoya causas sociales",
    content:
      "Un porcentaje de cada venta se destina a programas comunitarios enfocados en educación ambiental y bienestar social."
  }
];

const WhySection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section why-section">
      <div className="section-wrapper">

        <div className="why-container">

          {/* IZQUIERDA */}
          <div className="why-left">
            <h3 className="why-title">
              ¿POR QUÉ COMPRAR LOS
              <br />
              PRODUCTOS DE XA’AN
              <br />
              SKIN CARE?
            </h3>
          </div>

          {/* DERECHA — ACCORDION */}
          <div className="why-right">
            {items.map((item, index) => (
              <div key={index} className="why-item">

                <button className="why-button" onClick={() => toggle(index)}>
                  <span>{item.title}</span>

                  {/* flecha */}
                  <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                    ▾
                  </span>
                </button>

                <div
                  className={`why-content ${openIndex === index ? "show" : ""}`}
                >
                  <p>{item.content}</p>
                </div>

                {/* línea separadora */}
                <span className="why-line"></span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySection;
