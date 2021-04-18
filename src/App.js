import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./Components/Navbar";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
};

export default App;
