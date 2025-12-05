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
import Cuerpo4 from "./Component/Productos/Cuerpo/CuerpoComponents/Productos/Cuerpo4";
import Cuerpo5 from "./Component/Productos/Cuerpo/CuerpoComponents/Productos/Cuerpo5";
import Cuerpo6 from "./Component/Productos/Cuerpo/CuerpoComponents/Productos/Cuerpo6";
import Aceite1 from "./Component/Productos/Aceites/AceitesComponents/Productos/Aceite1";
import Aceite2 from "./Component/Productos/Aceites/AceitesComponents/Productos/Aceite2";
import Aceite3 from "./Component/Productos/Aceites/AceitesComponents/Productos/Aceite3";

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
        <Route path="/cuerpo4" element={<Cuerpo4 />} />
        <Route path="/cuerpo5" element={<Cuerpo5 />} />
        <Route path="/cuerpo6" element={<Cuerpo6 />} />

        <Route path="/aceite1" element={<Aceite1 />} />
        <Route path="/aceite2" element={<Aceite2 />} />
        <Route path="/aceite3" element={<Aceite3 />} />




      </Routes>
    <Footer />   {/* ⭐ En TODAS las pág. */}
</>
    
  );
}

export default App;
