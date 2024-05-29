import React from "react";
import { Link } from "react-scroll";

//Images and PDF
import logo from "./../../Assets/Home/logo.png";
import "./index.css";
import Resume from "./../../Files/Resume.pdf";

const Homepage = () => {
  return (
    <div className="home__wrap" id="Home">
      <div className="inner-wrap">
        <div className="home__main">
          <p>Hi, my name is</p>
          <h2>Yanek K.</h2>
          <h3>I build things for the web</h3>
          <p>
            I am a software developer specializing in building and designing
            digital experiences. Currently, I work at Cria Design Agency where I
            am focused on building accessible web experiences.
          </p>
          <div className="buttons">
            <Link
              activeClass="active"
              to="Projects"
              offset={-100}
              duration={1400}
              smooth={true}
              spy={true}
              exact
              className="button-main"
              activeClassName="active"
            >
              Get In Touch
            </Link>
            <div className="button-main">
              <a href={Resume} download>
                Resume
              </a>
            </div>
          </div>
        </div>
        <div classname="home__logo"></div>
        <img src={logo} alt="logo" className="home__logo" />
      </div>
    </div>
  );
};

export default Homepage;
