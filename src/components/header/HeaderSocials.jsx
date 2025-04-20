import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/konstantinos-galliakis-243061210/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/Kwts0s" target="_blank" rel="noreferrer"><FaGithub/></a>
      

    </div>
  )
}

export default HeaderSocials