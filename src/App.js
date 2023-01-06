import React, { useEffect } from "react";
import Portfolio from "../../Myportfolio/src/pages/Portfolio/Portfolio";
import Specialize from "../../Myportfolio/src/pages/Specialization/specialize";
import About from "../../Myportfolio/src/pages/About/About";
import Projects from "../../Myportfolio/src/pages/Project/Projects";
import Testimony from "../../Myportfolio/src/pages/Testimony/Testimony";
import Trusted from "../../Myportfolio/src/pages/TrustedClient/Trusted";
import Contact from "../../Myportfolio/src/pages/Contact/Contact";
import Navbar from "../../Myportfolio/src/components/layout/Navbar"
import "./App.css";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar/>
      <div>
        <Portfolio id="portfolio" />
        <Specialize id="specialize" />
        <About id="about" />
        <Projects id="projects" />
        <Testimony id="testimony" />
        <Trusted id="trusted" />
        <Contact id="contact" />
      </div>
    </>
  );
};

export default App;
