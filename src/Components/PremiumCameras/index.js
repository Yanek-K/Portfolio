import React from "react";
import "./index.css";

//Images
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
          <p>
            A Full-Stack, E-Commerce store for Premium Cameras Co. Based in
            Toronto, the store specializes in vintage film cameras and ships
            worldwide.
          </p>
          <div className="cameras__buttons">
            <div className="cameras__project">
              <a href="https://www.premiumcameras.ca" target="_blank">
                View Project
              </a>
            </div>
            <div className="cameras__code">
              {" "}
              <a
                href="https://github.com/Yanek-K/premium-cameras"
                target="_blank"
              >
                View Code
              </a>
            </div>
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
