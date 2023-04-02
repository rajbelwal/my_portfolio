import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <section className="footer-container">
        <div className="getInTouch">
          <h6>NEED MORE ?</h6>
        </div>
        <div className="footer-links">
          <a href="https://github.com/rajbelwal" target="__inNewTabForGithub">
            Github
          </a>
          <p>/</p>
          <a href="https://www.linkedin.com/in/raj-belwal-32bb95192/" target="__inNewTabForLinedIn">
            &nbsp; LinkedIn
          </a>
          <p>/</p>
          <a href="https://www.naukri.com/mnjuser/profile" target="__inNewTabForNaukri">
            Naukri
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
