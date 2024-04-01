import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      {/* <h5>What I Offer</h5> */}
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding and Identity Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>User interface evaluation and optimization</p>
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
              <BiCheck className='service__list-icon' />
              <p>WordPress</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full-Stack development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-Commerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Hosting and Server Management</p>
            </li>
           
            <li>
              <BiCheck className='service__list-icon' />
              <p>Third-party Services and API Integrations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical Support</p>
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
              <BiCheck className='service__list-icon' />
              <p>Website content creation and management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Image Manipulation</p>
            </li>

            
                
          </ul>
        </article>
        {/* END OF Content Creation  */}


      </div>
    </section>
  )
}

export default Services