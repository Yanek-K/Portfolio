import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

import logo from "./../../Assets/logo.png";
import github from "./../../Assets/github.png";
import linkedin from "./../../Assets/linkedin.png";

const Navbar = () => {
  return (
    <div className="wrap">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
        <NavLink
          to="/"
          exact
          className="btn"
          activeStyle={{ color: "#e55d6f" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="btn"
          activeStyle={{ color: "#e55d6f" }}
        >
          Projects
        </NavLink>
        <NavLink to="/about" className="btn" activeStyle={{ color: "#e55d6f" }}>
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="btn"
          activeStyle={{ color: "#e55d6f" }}
        >
          Contact
        </NavLink>
        {/* <ul>
          <li className="btn">Home</li>
          <li className="btn">Projects</li>
          <li className="btn">About</li>
          <li className="btn">Contact</li>
        </ul> */}
      </nav>
      <div className="links">
        <img src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  );
};

export default Navbar;
