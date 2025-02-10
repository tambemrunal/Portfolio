import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
// import Services from "./components/Services/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Services/Projects";

function App() {
  // 4e9020e7-b6e1-4c2e-ac02-5cdc74860801
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      
    </>
  );
}

export default App;
