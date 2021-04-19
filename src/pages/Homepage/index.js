import React from "react";
import Projects from "../Projects";
import logo from "./../../Assets/Home/logo.png";
import "./index.css";

const Homepage = () => {
  return (
    <div className="home__wrap" id="Home">
      <div className="inner-wrap">
        <img src={logo} alt="logo" className="home__logo" />
        <div className="home__main">
          <h2>Yanek K.</h2>
          <p>Front End Web Developer and Designer</p>
          <div className="buttons">
            <div className="projects">My Projects</div>
            <div className="resume">Resume</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
