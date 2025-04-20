import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      {/* <h5>Get In Touch</h5> */}
      <h2>Get In Touch</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>info.kgalliakis@gmail.com</h5>
            <a
              href="mailto:info.kgalliakis@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Konstantinos Galliakis</h5>
            <a
              href="https://www.linkedin.com/in/konstantinos-galliakis-243061210/"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
