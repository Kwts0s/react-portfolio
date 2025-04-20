import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photoshop</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating user-friendly website designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Enhancing user interface experiences</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>WordPress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-Stack development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building responsive websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating APIs and services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Hosting and Server Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Providing ongoing support</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
