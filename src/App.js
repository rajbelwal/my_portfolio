import React, { useState, useEffect } from "react";
import "./css/App.css";
import Header from "./Components/Header";
import Start from "./Components/Start";
import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
import Projects2 from "./Components/Projects2";
import About from "./Components/About";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import { VscChevronUp } from "react-icons/vsc";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) setShowBtn(true);
      else setShowBtn(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <div className={darkMode ? "app-components" : "dark-app-components"}>
        <Header setDarkMode={setDarkMode} />
        <Start darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects2 darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Form darkMode={darkMode} />
        <Footer />
      </div>

      {showBtn && (
        <div
          className={darkMode ? "dark-scroll" : "scroll"}
          onClick={scrollToTop}
        >
          <VscChevronUp size={46} className="app-icon" />
          <p className="app-text">Scroll to the top</p>
        </div>
      )}
    </div>
  );
}

export default App;
