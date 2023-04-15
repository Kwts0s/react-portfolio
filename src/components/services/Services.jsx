import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand Guide</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Site Maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Management System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Online Ordering System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Integration</p>
            </li>
          </ul>
        </article>

        {/* END OF Web Development  */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content strategy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Video</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Banners</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Posts,Stories,Reels</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation  */}


      </div>
    </section>
  )
}

export default Services