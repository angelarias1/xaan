import './App.css'

// IMPORTAR COMPONENTES
import Navbar from './Component/Hom/Navbar'
import Hero from './Component/Hom/hero'
import WhoWeAre from './Component/Hom/WhoWeAre'
import LoMasPedido from './Component/Hom/LoMasPedido'
import SectionMensaje from './Component/Hom/SectionMensaje'
import ExperienciaSensorial from './Component/Hom/ExperienciaSensorial'
import Aceites from './Component/Hom/Aceites'
import LogoCenter from './Component/Hom/LogoCenter'
import WhySection from './Component/Hom/WhySection'
import QuienesSomos from './Component/Hom/QuienesSomos'
import NuevaSeccion from './Component/Hom/NuevaSeccion'
import Footer from './Component/Hom/Footer'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ============================= */}
      {/* ACERCA DE XAAN → WhoWeAre     */}
      {/* ============================= */}
      <section id="acerca">
        <WhoWeAre />
      </section>

      {/* ============================= */}
      {/* PRODUCTOS → Lo Más Pedido     */}
      {/* ============================= */}
      <section id="productos">
        <LoMasPedido />
      </section>
      <SectionMensaje />

      {/* ============================= */}
      {/* PROCESO → ExperienciaSensorial */}
      {/* ============================= */}
      <section id="proceso">
        <ExperienciaSensorial />
      </section>

      {/* Secciones sin IDs */}
      <Aceites />
      <LogoCenter />
      <WhySection />
      <QuienesSomos />
      <NuevaSeccion />

      {/* ============================= */}
      {/* CONTACTO → FOOTER             */}
      {/* ============================= */}
      <section id="contacto">
        <Footer />
      </section>
    </>
  )
}

export default App
