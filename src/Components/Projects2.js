import React from "react";
import "../css/projects2.css";
// import Proj from "../Components/Proj";
import Proj2 from "../Components/Proj2";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

function Projects2({ darkMode }) {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  const scroll = document.getElementById("slider");

  const scrollLeft = () => {
    scroll.scrollLeft = scroll.scrollLeft - 500;
  };

  const scrollRight = () => {
    scroll.scrollLeft = scroll.scrollLeft + 500;
  };

  return (
    <div
      className={darkMode ? "project-outer" : "dark-project-outer"}
      id="Projects"
    >
      <div className="projects">
        <h1>Projects</h1>
        <div className="components">
          <TfiAngleLeft
            className="slider-icon left"
            size={50}
            onClick={scrollLeft}
          />
          <div id="slider">
            {slides.map((slide, index) => {
              return (
                <div className="slider-card">
                  <Proj2 darkMode={darkMode} />
                </div>
              );
            })}
          </div>
          <TfiAngleRight
            className="slider-icon right"
            size={50}
            onClick={scrollRight}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects2;
