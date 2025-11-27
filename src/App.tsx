import './App.css'

// IMPORTAR COMPONENTES
import Navbar from './Component/Navbar'
import Hero from './Component/hero'
import WhoWeAre from './Component/WhoWeAre'
import LoMasPedido from './Component/LoMasPedido'
import SectionMensaje from './Component/SectionMensaje'
import ExperienciaSensorial from './Component/ExperienciaSensorial'
import Aceites from './Component/Aceites'
import LogoCenter from './Component/LogoCenter'
import WhySection from './Component/WhySection'
import QuienesSomos from './Component/QuienesSomos'
import NuevaSeccion from './Component/NuevaSeccion'
import Footer from './Component/Footer'

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
