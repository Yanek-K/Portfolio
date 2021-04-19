import React from "react";
import "./App.css";

import { HashLink } from "react-router-hash-link";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./Components/Navbar";
import Projects from "./pages/Projects";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Homepage title="Home" id="Home" />
      <Projects title="Projects" id="Projects" />
    </div>
  );
};

export default App;
