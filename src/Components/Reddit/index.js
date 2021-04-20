import React from "react";
import "./index.css";
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
          <h2>
            A Front-End App using Reddit's API, this app allows the user to
            browse through Reddit's channels, view comments and engage in videos
            and images posted to the site.
          </h2>
          <div className="reddit__buttons">
            <div className="reddit__project">View Project</div>
            <div className="reddit__code">View Code</div>
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
