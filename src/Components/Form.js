import React from "react";
import "../css/form.css";
import { useRef } from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "@emailjs/browser";

function Form({ darkMode }) {
  // const form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_ebezca9",
        // "YOUR_TEMPLATE_ID",
        "template_uak575z",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "yvicChHHxTm2rST8r"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent Succesfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendMail = () => {
    window.location.href = `mailto:@rajbelwal20@gmail.com`;
  };

  const phoneTo = () => {
    window.location.href = `tel:+917678453378`;
  };

  return (
    <section
      className={darkMode ? "form-outer" : "dark-form-outer"}
      id="contact"
    >
      <div className="form">
        <form ref={form} onSubmit={sendEmail} className="main-form">
          <p>Send me a direct message👇🏻</p>
          <label>Your name</label>
          <input type="text" name="from_name" />
          <label>Your Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" rows="6" />
          <input type="submit" value="Send" className="form-button" />
        </form>
        <div className="form-getInTouch">
          <h1>
            GET IN<br></br>TOUCH ??
          </h1>
          <div className="contact-links">
            <span onClick={phoneTo}>
              <p>
                <FiPhoneCall size={20} />
                &nbsp; &nbsp; 7678453378
              </p>
            </span>
            <span onClick={sendMail}>
              <p>
                <IoMailUnreadOutline size={20} />
                &nbsp; &nbsp; @rajbelwal20@gmail.com
              </p>
            </span>
          </div>
        </div>
        <div className="form-getInTouch2">
          <h1>GET IN TOUCH ??</h1>
          <div className="contact-links-2">
            <span onClick={phoneTo}>
              <p>
                <FiPhoneCall size={20} />
                &nbsp; &nbsp; 7678453378
              </p>
            </span>
            <span onClick={sendMail}>
              <p>
                <IoMailUnreadOutline size={20} />
                &nbsp; &nbsp; rajbelwal20@gmail.com
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
