import React from "react";

// IMPORTA AQUÍ TODAS LAS SECCIONES DEL PROCESO:
import Ciencia from "./Ciencia";
import NuestroProceso from "./NP";
import Ballet from "./Ballet";
import NosInspira from "./Inspira";
import NuevaSeccion from "../Hom/NuevaSeccion";

const ProcesoPage: React.FC = () => {
  return (
    <>
      {/* SECCIONES DEL PROCESO EN ORDEN */}
      <Ciencia />
      <NuestroProceso />
      <Ballet />
      <NosInspira />
      <NuevaSeccion />

      {/* Si necesitas agregar más secciones, lo haces aquí */}
    </>
  );
};

export default ProcesoPage;
