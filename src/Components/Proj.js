import React from "react";
import "../css/projects.css";
import proj1 from "../images/projects/4.jpg";
import { AiFillGithub } from "react-icons/ai";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

function Proj({ darkMode }) {
  return (
    <div className={darkMode ? "proj" : "dark-Proj"}>
      <div className="image2">
        <img src={proj1} alt="not found" />
      </div>
      <div className="text">
        <p>
          I am a programmer who can develop Websites or Software. I have worked
          in Frontend as well as Backend in my projects.
        </p>
      </div>
      <div className="proj-links">
        <a href="github.com" className="code-link">
          <AiFillGithub className="icon-link" />
        </a>
        <a href="github.com" className="demo-link">
          <TfiLayoutMediaCenterAlt className="icon-link" />
        </a>
      </div>
    </div>
  );
}

export default Proj;
