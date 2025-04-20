import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Kostas Galliakis</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Kwts0s" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/konstantinos-galliakis-243061210/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KostasGall. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer