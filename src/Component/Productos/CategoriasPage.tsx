import React from "react";

// IMPORTA TUS SECCIONES / CATEGORÍAS
import Aceite from "./Aceite";
import Cuerpo from "./Cuerpo";
import Dedica from "./Dedica";
import Funcionamos from "./Funcionamos";   // ✅ corregido el nombre
import Aromatizantes from "./Aromatizantes";

const CategoriasPage: React.FC = () => {
  return (
    <>
      {/* Aquí van TODAS las categorías en el orden que quieras */}
      <Funcionamos />
      <Cuerpo />
      <Aromatizantes />
      <Aceite />
      <Dedica />
      
    </>
  );
};

export default CategoriasPage;
