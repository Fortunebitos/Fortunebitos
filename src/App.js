import React, { useEffect } from "react";
import Portfolio from "../../Myportfolio/src/screen/Portfolio/Portfolio";
import Specialize from "../../Myportfolio/src/screen/Specialization/specialize";
import About from "../../Myportfolio/src/screen/About/About";
import Projects from "../../Myportfolio/src/screen/Project/Projects";
import Testimony from "../../Myportfolio/src/screen/Testimony/Testimony";
import Trusted from "../../Myportfolio/src/screen/TrustedClient/Trusted";
import Contact from "../../Myportfolio/src/screen/Contact/Contact";
import Navbar from "../../Myportfolio/src/components/container/Navbar"
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
