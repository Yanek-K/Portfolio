import React from "react";
import PremiumCameras from "../../Components/PremiumCameras";
import Reddit from "../../Components/Reddit";
import Smalltalk from "../../Components/Smalltalk";
import "./index.css";

const Projects = () => {
  return (
    <div className="projects__wrap">
      {/* <h1>Projects</h1> */}
      <div className="projects__main">
        <div className="project__cameras">
          <h2>E-Commerce Store</h2>
          <PremiumCameras />
        </div>
        <div className="projects__smaltalk">
          <Smalltalk />
        </div>
        <div className="projects__reddit">
          <Reddit />
        </div>
      </div>
    </div>
  );
};

export default Projects;
