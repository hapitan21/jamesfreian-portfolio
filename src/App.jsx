import React from "react";
import Header from "./Components/header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Arrow from "./Components/Up_arrow/Arrow.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Particles from "./Components/Particles/Particles.jsx";
import TargetCursor from "./Components/TargetCursor/TargetCursor.jsx";

const App = () => {
  return (
    <>
  {/* Particles background (renders behind everything) */}
  <Particles particleCount={220} particleSpread={12} particleBaseSize={80} particleColors={["#8be9fd", "#ff79c6", "#50fa7b"]} />
  {/* Custom target cursor (renders above everything) */}
  <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} />
      <Header />
      <Navbar />
      <About />
      <Arrow />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
