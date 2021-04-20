import React from "react";
import "./index.css";

import { Link } from "react-scroll";
import logo from "./../../Assets/Home/logo.png";
import github from "./../../Assets/Home/github.png";
import linkedin from "./../../Assets/Home/linkedin.png";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Navbar = () => {
  return (
    <div className="wrap">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
        <Link
          activeClass="active"
          to="Home"
          offset={-100}
          duration={1400}
          smooth={true}
          spy={true}
          exact
          className="btn"
          activeClassName="active"
          // activeStyle={{ color: "#e55d6f" }}
        >
          <p>Home</p>
        </Link>
        <Link
          smooth
          spy={true}
          to="Projects"
          offset={-100}
          duration={1400}
          className="btn"
          activeClass="active"
          activeClassName="active"
          // activeStyle={{ color: "#e55d6f" }}
        >
          <p>Projects</p>
        </Link>
        <Link
          smooth
          spy={true}
          to="About"
          offset={-100}
          duration={1400}
          className="btn"
          activeClass="active"
          activeClassName="active"
          // activeStyle={{ color: "#e55d6f" }}
        >
          <p>About</p>
        </Link>
        <Link
          smooth
          spy={true}
          to="Contact"
          offset={-100}
          duration={1400}
          className="btn"
          activeClass="active"
          activeClassName="active"
          // activeStyle={{ color: "#e55d6f" }}
        >
          <p>Contact</p>
        </Link>
        {/* <Link to="about" className="btn" activeStyle={{ color: "#e55d6f" }}>
          <p>About</p>
        </Link>
        <Link to="contact" className="btn" activeStyle={{ color: "#e55d6f" }}>
          <p>Contact</p>
        </Link> */}
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
      <div className="burgerMenu">
        <MenuRoundedIcon />
      </div>
    </div>
  );
};

export default Navbar;
