import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
