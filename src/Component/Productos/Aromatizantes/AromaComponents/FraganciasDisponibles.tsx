import React from "react";
import "../AromaStyles/FraganciasDisponibles.css";

const FraganciasDisponibles: React.FC = () => {
  return (
    <section className="fd-section">
      <div className="fd-container">

        <h3 className="fd-title">FRAGANCIAS DISPONIBLES</h3>

        <div className="fd-columns">

          {/* COLUMNA 1 */}
          <ul className="fd-col">
           <li>SÁNDALO CON TOQUE DE VAINILLA.</li>
  <li>SÁNDALO CON LAVANDA.</li>
  <li>TÉ BLANCO</li>
  <li>BRISAS DEL MAR.</li>
  <li>PLÁTANO</li>
  <li>MELÓN</li>
  <li>BRISAS ORIENTALES</li>
  <li>FUSIÓN DE CÍTRICOS.</li>
          </ul>

          {/* COLUMNA 2 */}
          <ul className="fd-col">
              <li>LAVANDA CON PALO DE ROSA.</li>
  <li>LAVANDA Y ROMERO</li>
  <li>JOJOBA Y MACADAMIA</li>
  <li>TÉ VERDE MIEL Y ROSAS</li>
  <li>HIERBAS MEXICANAS</li>
  <li>MENTA</li>
  <li>AGUACATE</li>
  <li>MAMEY</li>

          </ul>

          {/* COLUMNA 3 */}
          <ul className="fd-col">
            <li>ALOE VERA Y PEPINO</li>
  <li>LIMÓN LAVANDA. ALOE VERA</li>
  <li>CÍTRICOS.</li>
  <li>MENTA Y EUCALIPTO</li>
  <li>COCO</li>
  <li>ACEITE DE MANZANILLA</li>
  <li>ACEITE DE AVELLANA</li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default FraganciasDisponibles;
