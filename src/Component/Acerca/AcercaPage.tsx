import React from "react";

// 🔥 Importa tus secciones internas reales
import Fracancia from "../../Component/Acerca/Fracancia";
import Nosmueve from "../../Component/Acerca/Nosmueve";
import Quienes from "../../Component/Acerca//Quienes";
import Somos from "../../Component/Acerca//Somos";
import NuevaSeccion from "../Hom/NuevaSeccion";


const AcercaPage: React.FC = () => {
  return (
    <>
      {/* ORDEN: puedes acomodarlo como quieras */}
      <Somos />
      <Fracancia />
      <Quienes />
      <Nosmueve />
      <NuevaSeccion />

    </>
  );
};

export default AcercaPage;
