import React, { useState } from "react";
import { Link } from "react-scroll";
import "../css/header.css";
import { ReactComponent as DarkMode } from "../images/icons/darkMode.svg";
// import { ReactComponent as Menu } from "../images/icons/menu.svg";
import { TiAdjustContrast } from "react-icons/ti";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import user from "../images/Drop down/user.png";
import edit from "../images/Drop down/edit.png";
import projects from "../images/Drop down/projects.png";
import contact from "../images/Drop down/contact.png";
import question from "../images/Drop down/question.png";
import pdf from "../pdfs/Resume.pdf";

function Header({ setDarkMode }) {
  const downloadCv = () => {
    window.open(pdf);
  };

  // DARK MODE

  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  const turnLight = (prev) => {
    setIsDarkModeOn((prev) => !prev);
    console.log("isDarkModeOn : ", isDarkModeOn);
    setDarkMode(isDarkModeOn);
  };

  return (
    <div className="main-header" id="home">
      <header className={isDarkModeOn ? "darkHeader" : "lightHeader"} id="home">
        <span className="menu">
          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title=""
            className="mt-4"
          >
            <Link
              to="start"
              spy={false}
              smooth={true}
              offset={50}
              duration={20}
            >
              <Dropdown.Item href="#/action-1" active>
                <img className="user" src={user} alt="oops" /> Home
              </Dropdown.Item>
            </Link>
            <Link
              to="start"
              spy={false}
              smooth={true}
              offset={250}
              duration={20}
            >
              <Dropdown.Item href="#/action-3">
                <img className="user" src={projects} alt="oops" /> Projects
              </Dropdown.Item>
            </Link>
            <Link
              to="start"
              spy={false}
              smooth={true}
              offset={700}
              duration={20}
            >
              <Dropdown.Item href="#/action-2">
                <img className="user" src={question} alt="oops" /> About
              </Dropdown.Item>
            </Link>

            <Dropdown.Divider />
            <Link
              to="start"
              spy={false}
              smooth={true}
              offset={1400}
              duration={20}
            >
              <Dropdown.Item href="#/action-4">
                <img className="user" src={contact} alt="oops" /> Contact
              </Dropdown.Item>
            </Link>

            <Dropdown.Item href="#/action-4" onClick={downloadCv}>
              <img className="user" src={edit} alt="oops" /> Download CV
            </Dropdown.Item>
          </DropdownButton>
        </span>
        <div className="logo">
          <Link to="start" spy={false} smooth={true} offset={50} duration={20}>
            <h6>rajbelwal-portfolio</h6>
          </Link>
        </div>
        <div className="navigators">
          <ul>
            <li>
              <Link
                to="start"
                spy={false}
                smooth={true}
                offset={50}
                duration={20}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={false}
                smooth={true}
                offset={-50}
                duration={20}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={false}
                smooth={true}
                offset={-150}
                duration={20}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={false}
                smooth={true}
                offset={50}
                duration={20}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={downloadCv}>Download CV</Link>
            </li>
          </ul>
        </div>
        <span
          className={isDarkModeOn ? "lightLight" : "darkLight "}
          onClick={turnLight}
        >
          <TiAdjustContrast size={28} />
        </span>
      </header>
    </div>
  );
}

export default Header;
