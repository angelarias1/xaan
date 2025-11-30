import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Hom/Navbar";
import HomePage from "./Component/Hom/HomePages";
import AcercaPage from "./Component/Acerca/AcercaPage";
import CategoriasPage from "./Component/Categorias/CategoriasPage";
import ProcesoPage from "./Component/Proceso/ProcesoPage";
import ContactoPage from "./Component/Contacto/Contactate";
import Footer from "./Component/Hom/Footer";

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
      </Routes>
    <Footer />   {/* ⭐ En TODAS las pág. */}
</>
    
  );
}

export default App;
