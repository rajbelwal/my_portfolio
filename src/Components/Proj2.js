import React from "react";
import "../css/proj2.css";
import projimage from "../images/projects/4.jpg";
import { GrGithub } from "react-icons/gr";
import { GrRss } from "react-icons/gr";

// import Githubicon from "../images/icons/github.svg";
// import { GrLinkedin } from "react-icons/gr";
// import { GrLinkedinOption } from "react-icons/gr";

function Proj2({ darkMode }) {
  return (
    <div className={darkMode ? "proj-again" : "dark-proj-again"}>
      <div className="proj-image">
        <img src={projimage} alt="not found :(" />
      </div>

      <div className="proj-text">
        <p>
          I am a programmer who can develop Websites or Software. I have worked
          in Frontend as well as Backend in my projects.
        </p>
      </div>

      <div className="proj-links">
        <a href="https://chat.openai.com/chat" target="__linkToGithubPage">
          <GrGithub size={25} />
        </a>
        <a href="https://chat.openai.com/chat" target="__linkToLinkedinPage">
          <GrRss size={25} />
        </a>
      </div>
    </div>
  );
}

export default Proj2;
