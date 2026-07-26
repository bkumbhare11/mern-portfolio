import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import Footer from "./components/sections/Footer";
import Certificates from "./components/sections/Certificates";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[80%] w-full mx-auto">
        <a
          href="#home"
          className="fixed bottom-8 right-8 z-50 bg-violet-600 text-white border border-violet-700 p-3 rounded-full transition-all duration-300 ease-in-out  hover:bg-violet-700"
        >
          <HiOutlineArrowNarrowUp />
        </a>

        <div id="home" className="scroll-mt-48">
          <Hero />
        </div>

        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="about" className="scroll-mt-24">
          <About />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="contact" className="scroll-mt-24">
          <Certificates />
        </div>

        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
