import React from "react";

// IMPORTA TUS SECCIONES / CATEGORÍAS
import Perfuman from "./Perfuman";
import ProductosAromatizantes from "./ProductosAromatizantes";
import FraganciasDisponibles from "./FraganciasDisponibles";


const AromaPage: React.FC = () => {
  return (
    <>
      <Perfuman />
      <ProductosAromatizantes />
            <FraganciasDisponibles />



      
    </>
  );
};

export default AromaPage;
