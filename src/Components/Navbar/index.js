import React, { useState } from "react";
import "./index.css";
import { Link } from "react-scroll";

//Images
import logo from "./../../Assets/Home/logo.png";
import github from "./../../Assets/Home/github.png";
import linkedin from "./../../Assets/Home/linkedin.png";

//MUI
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Burger from "../Burger";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrap">
      <Link
        to="Home"
        offset={-100}
        duration={1400}
        smooth={true}
        exact
        // className="logo"
      >
        <img src={logo} alt="logo" className="logo" />
      </Link>

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
        >
          <p>About</p>
        </Link>
        <Link
          smooth
          spy={true}
          to="Contact"
          offset={-50}
          duration={1400}
          className="btn"
          activeClass="active"
          activeClassName="active"
        >
          <p>Contact</p>
        </Link>
      </nav>
      <div className="links">
        <a href="https://github.com/Yanek-K" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href=" https://www.linkedin.com/in/yanek-k" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className="burgerMenu">
        <MenuRoundedIcon onClick={() => setOpen(!open)} />
        <Burger open={open} />
      </div>
    </div>
  );
};

export default Navbar;
