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
            <li>Sándalo con toque de vainilla.</li>
            <li>Sándalo con lavanda.</li>
            <li>Té blanco</li>
            <li>Brisas del mar.</li>
            <li>Plátano</li>
            <li>Melón</li>
            <li>Brisas orientales</li>
            <li>Fusión de cítricos.</li>
          </ul>

          {/* COLUMNA 2 */}
          <ul className="fd-col">
            <li>Lavanda con palo de rosa.</li>
            <li>Lavanda y romero</li>
            <li>Jojoba y macadamia</li>
            <li>Té verde miel y rosas</li>
            <li>Hierbas mexicanas</li>
            <li>Menta</li>
            <li>Aguacate</li>
            <li>Mamey</li>
          </ul>

          {/* COLUMNA 3 */}
          <ul className="fd-col">
            <li>Aloe vera y pepino</li>
            <li>Limón lavanda. Aloe vera</li>
            <li>Cítricos.</li>
            <li>Menta y eucalipto</li>
            <li>Coco</li>
            <li>Aceite de manzanilla</li>
            <li>Aceite de avellana</li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default FraganciasDisponibles;
