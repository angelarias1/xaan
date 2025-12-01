import React from "react";

// IMPORTA AQUÍ TODAS LAS SECCIONES DEL PROCESO:
import Ciencia from "./Contactate";
import NuevaSeccion from "../Hom/NuevaSeccion";



const ContactoPage: React.FC = () => {
  return (
    <>
      {/* SECCIONES DEL PROCESO EN ORDEN */}
      <Ciencia />
      <NuevaSeccion />


      {/* Si necesitas agregar más secciones, lo haces aquí */}
    </>
  );
};

export default ContactoPage;
