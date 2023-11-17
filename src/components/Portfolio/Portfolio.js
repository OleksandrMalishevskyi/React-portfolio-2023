import React, { useEffect } from 'react'

import './portfolio.scss'
import TagCloud from "TagCloud";

const Portfolio = () => {

  useEffect(() => {
    return () => {
      const container = '.tagcloud'
      const texts = [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'Vue',
        'Nuxt',
        'NodeJS',
  '<img src="../../assets/images/logo1.png" alt="Image 1">',
  '<img src="../../assets/images/" alt="Image 2">',
        'ES6',
        'GIT',
        'GITHUB',
      ]

      const options = {
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      }

      TagCloud(container, texts, options)
    }
  }, [])

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  )
}

export default Portfolio
