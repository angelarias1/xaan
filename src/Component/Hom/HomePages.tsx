import React from "react";

// COMPONENTES DE LA LANDING (los que ya tenías en App)
import Hero from "./hero";
import WhoWeAre from "./WhoWeAre";
import LoMasPedido from "./LoMasPedido";
import SectionMensaje from "./SectionMensaje";
import ExperienciaSensorial from "./ExperienciaSensorial";
import Aceites from "./Aceites";
import LogoCenter from "./LogoCenter";
import WhySection from "./WhySection";
import QuienesSomos from "./QuienesSomos";
import NuevaSeccion from "./NuevaSeccion";

const HomePage: React.FC = () => {
  return (
    <>

      <Hero />
      <WhoWeAre />
      <LoMasPedido />
      <SectionMensaje />
      <ExperienciaSensorial />
      <Aceites />
      <LogoCenter />
      <WhySection />
      <QuienesSomos />
      <NuevaSeccion />

    </>
  );
};

export default HomePage;
