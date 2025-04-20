import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
    {/* <h5>Get to Know</h5> */}
    <h2>About Me</h2>

    <div className="container about__container">
      
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className="about__card">
            <FaGraduationCap className="about__icon"/>
            <h5>Studies</h5>
            <small>3+ Years Studying</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <small>10+  </small>
          </article>

        </div>
        <p>Web developer with a background in computer science, focused on creating thoughtful solutions. I enjoy collaborating, learning new technologies, and growing as a professional.
        </p>
       

        <a href="#contact" className="btn btn-primary">Let's Talk</a>

      </div>
    </div>
  </section>
  )
}

export default About