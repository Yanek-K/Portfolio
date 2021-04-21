import React from "react";
import "./App.css";

//Components
import Homepage from "./pages/Homepage";
import Navbar from "./Components/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Homepage title="Home" id="Home" />
      <Projects title="Projects" id="Projects" />
      <About title="About" id="About" />
      <Contact title="Contact" id="Contact" />
    </div>
  );
};

export default App;
