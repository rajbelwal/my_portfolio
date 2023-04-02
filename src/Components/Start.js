import React from "react";
import "../css/start.css";
import photo from "../images/photos/image.png";
import github from "../images/icons/github.png";
import linkedin from "../images/icons/linkedIn.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../pdfs/Resume.pdf";

function Start({ darkMode }) {
  console.log("darkMode : ", darkMode);

  const sendMail = () => {
    window.location.href = `mailto:rajbelwal20@gmail.com`;
  };

  const openPdf = () => {
    window.open(pdf);
  };

  return (
    <div className={darkMode ? "main" : "main-two"} id="start">
      <div className={darkMode ? "start" : "start-two"}>
        <div className="content">
          <h1 className="upper-h1">Hi there!</h1>
          <h1 className="lower-h1">
            I'm <span className="name">Raj Belwal</span>
          </h1>

          <br></br>

          <div className="webD">I'm a Web Developer.</div>

          <br></br>

          <p className="upper-p">
            I am a programmer who can develop Websites or Software. I have
            worked in Frontend as well as Backend in my projects.
          </p>
          <br></br>
          <div className="icons">
            <a href="https://github.com/rajbelwal" target="__newPageForGithub">
              <img className="git" src={github} alt="not found" />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-belwal-32bb95192/"
              target="__newPageForLinkedIn"
            >
              <img className="li" src={linkedin} alt="not found" />
            </a>
          </div>
          <br></br>

          <div className="buttons-links">
            <Button className="bt2" variant="outline-dark" onClick={openPdf}>
              Resume
            </Button>
            <Button className="bt1" variant="outline-dark" onClick={sendMail}>
              Contact me
            </Button>
          </div>
        </div>

        <div className="image">
          <img src={photo} alt="not found" />
        </div>
      </div>
      <div className={darkMode ? "buttons-links-2" : "dark-buttons-links-2"}>
        <div className="mobile-para">
          <p>
            I am a programmer who can develop Websites or Software. I have
            worked in Frontend as well as Backend in my projects.
          </p>
        </div>
        <div className="mobile-buttons">
          <Button className="bt2-2" variant="outline-dark" onClick={openPdf}>
            Resume
          </Button>
          <Button className="bt1-2" variant="outline-dark" onClick={sendMail}>
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Start;
