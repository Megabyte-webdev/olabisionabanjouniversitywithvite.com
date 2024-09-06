import React from 'react'
import assets from '../assets/assets'

const Testimonials = ({ theme }) => {
  return (
    <div>
        <section className={`txt-img-section ${theme && theme} testimonials container`}>
            <article>
                <h5 className="section-label">testimonials</h5>

                <h2 className="main-heading">Let's hear what our students have to say about OOU.</h2>
            </article>
            <div className="figures">
                <section className="figure">
                    <img src={assets.group19} alt="hero-img-large" />
                    
                </section>
                <section className="figure">
                    <img src={assets.group20} alt="hero-img-large" />

                </section>
                <section className="figure">
                    <img src={assets.hero_img} alt="hero-img-large" />
        
                </section>
            </div>

        </section>
    </div>
  )
}

export default Testimonials