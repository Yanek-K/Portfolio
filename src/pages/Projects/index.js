import React from "react";
import "./index.css";

//Components
import PremiumCameras from "../../Components/PremiumCameras";
import Reddit from "../../Components/Reddit";
import Smalltalk from "../../Components/Smalltalk";

const Projects = () => {
  return (
    <div className="projects__wrap" id="Projects">
      <h1 className="project__header">The Projects</h1>
      <div className="projects__main">
        <div className="project__cameras">
          <h2 className="project__info">E-Commerce Store</h2>
          <PremiumCameras />
        </div>
        <div className="project__smaltalk">
          <h2 className="project__info">Chat Application</h2>
          <Smalltalk />
        </div>
        <div className="projects__reddit">
          <h2 className="project__info">Reddit Channels</h2>
          <Reddit />
        </div>
      </div>
    </div>
  );
};

export default Projects;
