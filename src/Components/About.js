import React, { useState } from "react";
import "../css/about.css";
// import photo2 from "../images/photos/image.png";

function About({ darkMode }) {
  const [open, setopen] = useState(false);

  // const dropDownRef = useRef();

  // window.addEventListener("click", (e) => {
  //   if(e.target !== dropDownRef.current){
  //     setopen(false)
  //   };
  // });

  return (
    <div className={darkMode ? "about-main" : "dark-about-main"} id="about">
      <div className="about">
        <h1 className="about-topic">About</h1>
        <div className="about-content">
          {/* <div className="about-photo">
            <img src={photo2} alt="not found" />
            <h5>PHOTO</h5>
          </div> */}
          <div className="below">
            <div className="about-text">
              <p>
                I am a programmer who can develop Websites or Software. I have
                worked in Frontend as well as Backend in my projects. I am a
                programmer who can develop Websites or Software. I have worked
                in Frontend as well as Backend in my projects. I am a programmer
                who can develop Websites or Software. I have worked in Frontend
                as well as Backend in my projects. I am a programmer who can
                develop Websites or Software. I have worked in Frontend as well
                as Backend in my projects.
              </p>
            </div>
            <div className="about-buttons">
              <button className="first" onClick={() => setopen(!open)}>
                EDUCATION
              </button>
              <button className="second">EDUCATION</button>
            </div>
            {open && (
              <div
                // ref={dropDownRef}
                className="dropdown-about"
              >
                <div className="about-left">
                  <section className="about-one">
                    <div className="date">
                      <p>2019-2022</p>
                    </div>
                    <div className="course">
                      <p>Bachelor Of Computer Applications</p>
                    </div>
                    <div className="place">
                      <p>
                        Trinity Institute Of Prefessional Studies IP University
                        Dwarka Sec - 9, New Delhi
                      </p>
                    </div>
                  </section>
                  <section className="about-two">
                    <div className="date">
                      <p>2019-2022</p>
                    </div>
                    <div className="course">
                      <p>Bachelor Of Computer Applications</p>
                    </div>
                    <div className="place">
                      <p>
                        Trinity Institute Of Prefessional Studies IP University
                        Dwarka Sec - 9, New Delhi
                      </p>
                    </div>
                  </section>
                </div>
                <div className="about-right">
                  <section className="about-one">
                    <div className="date">
                      <p>2019-2022</p>
                    </div>
                    <div className="course">
                      <p>Bachelor Of Computer Applications</p>
                    </div>
                    <div className="place">
                      <p>
                        Trinity Institute Of Prefessional Studies IP University
                        Dwarka Sec - 9, New Delhi
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            )}
            {open && (
              <div
                // ref={dropDownRef}
                className="dropdown-about2"
              >
                <section className="about-one2">
                  <div className="date">
                    <p>2019-2022</p>
                  </div>
                  <div className="course">
                    <p>Bachelor Of Computer Applications</p>
                  </div>
                  <div className="place">
                    <p>
                      Trinity Institute Of Prefessional Studies IP University
                      Dwarka Sec - 9, New Delhi
                    </p>
                  </div>
                </section>
                <section className="about-two2">
                  <div className="date">
                    <p>2019-2022</p>
                  </div>
                  <div className="course">
                    <p>Bachelor Of Computer Applications</p>
                  </div>
                  <div className="place">
                    <p>
                      Trinity Institute Of Prefessional Studies IP University
                      Dwarka Sec - 9, New Delhi
                    </p>
                  </div>
                </section>
                <section className="about-three2">
                  <div className="date">
                    <p>2019-2022</p>
                  </div>
                  <div className="course">
                    <p>Bachelor Of Computer Applications</p>
                  </div>
                  <div className="place">
                    <p>
                      Trinity Institute Of Prefessional Studies IP University
                      Dwarka Sec - 9, New Delhi
                    </p>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
