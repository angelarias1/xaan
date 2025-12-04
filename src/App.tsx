import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Hom/Navbar";
import HomePage from "./Component/Hom/HomePages";
import AcercaPage from "./Component/Acerca/AcercaPage";
import CategoriasPage from "./Component/Productos/CategoriasPage";
import ProcesoPage from "./Component/Proceso/ProcesoPage";
import ContactoPage from "./Component/Contacto/ContactoPage";
import Footer from "./Component/Hom/Footer";
import AromaPage from "./Component/Productos/Aromatizantes/AromaComponents/AromaPages";
import Producto1Aromatizante from "./Component/Productos/Aromatizantes/AromaComponents/Productos/AromaBlanco";
import Producto2Aromatizante from "./Component/Productos/Aromatizantes/AromaComponents/Productos/AromaAmbiente";
import Producto3Aromatizante from "./Component/Productos/Aromatizantes/AromaComponents/Productos/AromaDifusor";
import CuerpoPage from "./Component/Productos/Cuerpo/CuerpoComponents/CuerpoPages";
import AceitesPage from "./Component/Productos/Aceites/AceitesComponents/AceitesPages";
import Cuerpo1 from "./Component/Productos/Cuerpo/CuerpoComponents/Productos/Cuerpo1";
import Cuerpo2 from "./Component/Productos/Cuerpo/CuerpoComponents/Productos/Cuerpo2";
import Cuerpo3 from "./Component/Productos/Cuerpo/CuerpoComponents/Productos/Cuerpo3";

function App() {
  return (
    <>
      {/* ⭐ NAVBAR SE VE EN TODAS LAS PÁGINAS */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acerca" element={<AcercaPage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/proceso" element={<ProcesoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/aromatizantes" element={<AromaPage />} />
        <Route path="/cuerpos" element={<CuerpoPage />} />
        <Route path="/aceites" element={<AceitesPage />} />


        <Route path="/aromatizantes/blancos" element={<Producto1Aromatizante />} />
        <Route path="/aromatizantes/ambientes" element={<Producto2Aromatizante />} />
        <Route path="/aromatizantes/difusores" element={<Producto3Aromatizante />} />

        <Route path="/cuerpo1" element={<Cuerpo1 />} />
        <Route path="/cuerpo2" element={<Cuerpo2 />} />
        <Route path="/cuerpo3" element={<Cuerpo3 />} />





      </Routes>
    <Footer />   {/* ⭐ En TODAS las pág. */}
</>
    
  );
}

export default App;
