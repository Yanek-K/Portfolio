import React from "react";
import "./index.css";
import Logo from "./../../Assets/Projects/PremiumCameras/Logo.jpg";
import premiumCameras from "./../../Assets/Projects/PremiumCameras/PremiumCameras.png";
import Technologies1 from "./../../Assets/Projects/PremiumCameras/Technologies1.png";
const PremiumCameras = () => {
  return (
    <div className="cameras__wrap">
      <div className="cameras__main">
        <div className="cameras__left">
          <img src={Logo} className="premium__logo" alt="logo" />
          <img src={premiumCameras} className="premium__view" alt="view" />
        </div>
        <div className="cameras__right">
          <h2>
            An E-Commerce store for Premium Cameras LTD. Based in Toronto, the
            store specializes in Vintage Film Cameras and ships worldwide.
          </h2>
          <div className="cameras__buttons">
            <div className="cameras__project">View Project</div>
            <div className="cameras__code">View Code</div>
          </div>
          <div className="cameras__tech">
            <p>Technologies Used:</p>
            <img
              src={Technologies1}
              alt="Tech-Used"
              className="cameras__tech__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCameras;
