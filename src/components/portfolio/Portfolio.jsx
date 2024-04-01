import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio3.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio1.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'
import IMG10 from '../../assets/portfolio10.png'


const data = [
  {
    id:6,
    image: IMG6,
    title:'BlueBliss - WordPress',
    github:'https://github.com/Kwts0s/BlueBliss',
    demo:'https://blue-bliss.gr/'
  },
  {
    id:9,
    image: IMG9,
    title:'CozyCreations - WordPress',
    github:'https://github.com/Kwts0s/',
    demo:'https://cozy-creations.gr/'
  },
  {
    id:8,
    image: IMG8,
    title:'Map_BlueBliss - JavaScript, Mapbox',
    github:'https://github.com/Kwts0s/Map_BlueBliss',
    demo:'https://map.blue-bliss.gr/'
  },
  {
    id:7,
    image: IMG7,
    title:'Spotify Clone - Next.js',
    github:'https://github.com/Kwts0s/spotify-clone',
    demo:'https://master.d1emjuwnibv1wu.amplifyapp.com/'
  },
  {
    id:1,
    image: IMG1,
    title:'Villa Galliaki - WordPress',
    github:'https://github.com/Kwts0s/VillaGalliaki',
    demo:'https://villagalliaki.gr/'
  },
  {
    id:2,
    image: IMG2,
    title:'PASPA - WordPress',
    github:'https://github.com/Kwts0s/PASPA',
    demo:'https://jovial-jones.185-138-42-173.plesk.page/'
  },
  {
    id:3,
    image: IMG3,
    title:'WeatherApp - JavaScript',
    github:'https://github.com/Kwts0s/WeatherApp',
    demo:'https://main.d1tv3ngeyoewhl.amplifyapp.com/'
  },
  {
    id:4,
    image: IMG4,
    title:'WeatherApp V2 - JavaScript',
    github:'https://github.com/Kwts0s/WeatherAppV2',
    demo:'https://master.d3t8luivt11lk3.amplifyapp.com/'
  },
  {
    id:5,
    image: IMG5,
    title:'Mobile Shopee - PHP',
    github:'https://github.com/Kwts0s/Shopee',
    demo:'https://beautiful-mayer.185-138-42-185.plesk.page/'
  },
  {
    id:10,
    image: IMG10,
    title:'Chart - react.js',
    github:'https://github.com/Kwts0s/react-chart',
    demo:'https://github.com/Kwts0s/react-chart'
  }
  
  
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>My Recent Work</h5> */}
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
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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