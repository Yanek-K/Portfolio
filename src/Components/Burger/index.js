import React from "react";
import "./index.css";

import { Link } from "react-scroll";

const Burger = ({ open }) => {
  return (
    <div className="burger" open={open}>
      <div className="wraper">
        {open ? (
          <nav className="burger__nav">
            <Link
              activeClass="active"
              to="Home"
              offset={-100}
              duration={1400}
              smooth={true}
              spy={true}
              exact
              className="burger__btn"
              activeClassName="burger__active"
            >
              <p>Home</p>
            </Link>
            <Link
              smooth
              spy={true}
              to="Projects"
              offset={-100}
              duration={1400}
              className="burger__btn"
              activeClass="burger__active"
              activeClassName="burger__active"
            >
              <p>Projects</p>
            </Link>
            <Link
              smooth
              spy={true}
              to="About"
              offset={-100}
              duration={1400}
              className="burger__btn"
              activeClass="burger__active"
              activeClassName="burger__active"
            >
              <p>About</p>
            </Link>
            <Link
              smooth
              spy={true}
              to="Contact"
              offset={-50}
              duration={1400}
              className="burger__btn"
              activeClass="burger__active"
              activeClassName="burger__active"
            >
              <p>Contact</p>
            </Link>
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Burger;
