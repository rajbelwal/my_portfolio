import React from "react";
import "../css/skills.css";
import Python from "../images/Skills/python.png";
import JS from "../images/Skills/js.png";
import reactPng from "../images/Skills/React.webp";
import C from "../images/Skills/c++.png";
import Html from "../images/Skills/html.png";
import Css from "../images/Skills/css.png";

function Skills({darkMode}) {
  return (
    <div 
    className={darkMode? "skills" : "darkSkills"}
    >
      <h2 className="tech">Tech</h2>
      <h2 className="line" >|</h2>
        <img className="p" src={Python}  alt="not found"/>
        <img className="j" src={JS} alt="not found" />
        <img className="r" src={reactPng} alt="not found" />
        <img className="c" src={C}  alt="not found"/>
        <img className="h" src={Html}  alt="not found"/>
        <img className="cs" src={Css}  alt="not found"/>
      </div>
  );
}

export default Skills;
