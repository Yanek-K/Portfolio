import React from "react";
import "./index.css";
import Logo from "./../../Assets/Projects/Smalltalk/Logo.png";
import smalltalk from "./../../Assets/Projects/Smalltalk/smalltalk.png";
import Technologies2 from "./../../Assets/Projects/Smalltalk/Technologies2.png";

const Smalltalk = () => {
  return (
    <div className="smalltalk__wrap">
      <div className="smalltalk__main">
        <div className="smalltalk__left">
          <img src={Logo} className="smalltalk__logo" alt="logo" />
          <img src={smalltalk} className="smalltalk__view" alt="view" />
        </div>
        <div className="smalltalk__right">
          <h2>
            A Chat Application based on Twitter where users can create a
            profile, upload their profile image and post to the conversation.
            Likes, comments and history are all managed by Redux.
          </h2>
          <div className="smalltalk__buttons">
            <div className="smalltalk__project">View Project</div>
            <div className="smalltalk__code">View Code</div>
          </div>
          <div className="smalltalk__tech">
            <p>Technologies Used:</p>
            <img
              src={Technologies2}
              alt="Tech-Used"
              className="smalltalk__tech__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smalltalk;
