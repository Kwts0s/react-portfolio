import React from 'react'
import './portfolio.css'
import bb from '../../assets/bb.png'
import bb_map from '../../assets/bb_map.png'
import vg from '../../assets/vg.png'
import sw from '../../assets/sw.png'
import gd from '../../assets/gd.png'

const data = [
  {
    id:1,
    image: sw,
    title:'Slow Winds - WordPress',
    github:'https://github.com/Kwts0s/slowwinds',
    demo:'https://slow-winds.com/'
  },
  {
    id:2,
    image: gd,
    title:'Galhnos Derma - WordPress',
    github:'https://galhnosderma.gr/',
    demo:'https://galhnosderma.gr/'
  },
  {
    id:3,
    image: bb,
    title:'BlueBliss - WordPress',
    github:'https://blue-bliss.gr/',
    demo:'https://blue-bliss.gr/'
  },
  {
    id:4,
    image: bb_map,
    title:'BlueBliss Map - JavaScript, Mapbox',
    github:'https://github.com/Kwts0s/blueblissmap',
    demo:'https://map.blue-bliss.gr/'
  },
  {
    id:5,
    image: vg,
    title:'Villa Galliaki - WordPress',
    github:'https://villagalliaki.gr/',
    demo:'https://villagalliaki.gr/'
  }
  
  
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {/* Portfolio Item  */}

        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio_item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio