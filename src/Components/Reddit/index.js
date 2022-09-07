import React from "react";
import "./index.css";

//Images
import Logo from "./../../Assets/Projects/Notreddit/Logo.png";
import notreddit from "./../../Assets/Projects/Notreddit/notreddit.png";
import Technologies3 from "./../../Assets/Projects/Notreddit/Technologies3.png";

const Reddit = () => {
  return (
    <div className="reddit__wrap">
      <div className="reddit__main">
        <div className="reddit__left">
          <img src={Logo} className="reddit__logo" alt="logo" />
          <img src={notreddit} className="reddit__view" alt="view" />
        </div>
        <div className="reddit__right">
          <p>
            A Front-End App using Reddit's API, this app allows the user to
            browse through Reddit's channels, view comments and engage in videos
            and images posted to the site.
          </p>
          <div className="reddit__buttons">
            <div className="reddit__project">
              {" "}
              <a href="http://not-reddit.yanek-k.com//" target="_blank">
                View Project
              </a>
            </div>
            <div className="reddit__code">
              {" "}
              <a href="https://github.com/Yanek-K/Not_Reddit" target="_blank">
                View Code
              </a>
            </div>
          </div>
          <div className="reddit__tech">
            <p>Technologies Used:</p>
            <img
              src={Technologies3}
              alt="Tech-Used"
              className="reddit__tech__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reddit;
