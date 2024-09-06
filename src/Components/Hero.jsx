import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <header className="hero-section">
    <div className="hero-container">
        <img className="hero-img-large" src={assets.hero_img} alt="hero-img" />
        <div className="hero-img-small">
            <img src={assets.welcome_img} alt="welcome-image" />
            <img className="hero-img-tiny" src={assets.union} alt="Union" />
            <img className="hero-img-tiny" src={assets.rectangle} alt="Rectangle" />
        </div>
    </div>
</header>
  )
}

export default Hero