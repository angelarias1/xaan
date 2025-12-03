import React, { useState } from "react";
import "../../styles/Hom/WhySection.css";

interface FAQItem {
  title: string;
  content: string;
}

const faqData: FAQItem[] = [
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
  const [active, setActive] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="nw-why">
      <div className="nw-why-inner">

        {/* IZQUIERDA */}
        <div className="nw-why-left">
          <h3 className="nw-why-title">
            ¿POR QUÉ COMPRAR LOS <br />
            PRODUCTOS DE XA’AN <br />
            SKIN CARE?
          </h3>
        </div>

        {/* DERECHA */}
        <div className="nw-why-right">
          {faqData.map((item, index) => (
            <div key={index} className="nw-why-block">

              <button
                className="nw-why-btn"
                onClick={() => toggleOpen(index)}
              >
                <span className="nw-why-btn-text">{item.title}</span>

                <span
                  className={`nw-arrow ${active === index ? "nw-open" : ""}`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`nw-why-content ${
                  active === index ? "nw-visible" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>

              <div className="nw-line"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
