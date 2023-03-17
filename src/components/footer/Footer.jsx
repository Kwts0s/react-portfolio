import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kostas Galliakis</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Kwts0s"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/konstantinos-galliakis-243061210/"><BsLinkedin/></a>
        <a href="https://www.facebook.com/kostas.gall/"><BsFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KostasGall. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer