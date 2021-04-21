import React from "react";
import logo from "./../../Assets/Home/logo.png";
import "./index.css";

import { Link } from "react-scroll";

const Homepage = () => {
  return (
    <div className="home__wrap" id="Home">
      <div className="inner-wrap">
        <img src={logo} alt="logo" className="home__logo" />
        <div className="home__main">
          <h2>Yanek K.</h2>
          <p>Front End Web Developer and Designer</p>
          <div className="buttons">
            <Link
              activeClass="active"
              to="Projects"
              offset={-100}
              duration={1400}
              smooth={true}
              spy={true}
              exact
              className="projects"
              activeClassName="active"
            >
              My Projects
            </Link>
            <div className="resume">Resume</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
