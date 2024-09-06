import React from 'react'
import assets from '../assets/assets'
const About = () => {
  return (
    <div>
        <section className="txt-img-section about-section container">
            <div className="image">
                <img src={assets.group4} alt="hero-img-large" />
            </div>
            <article>
                <h5 className="section-label">About our university</h5>

                <h2 className="main-heading">A good education is a foundation for a better future</h2>

                <p>
                    Olabisi Onabanjo University is a prominent insitution to excellence in teaching, research and
                    community engagement. Over the past few years, we have nurtured leaders acros a multitude of
                    disciplines through our diverse programs.
                </p>
                <button className="primary-btn"><a href="https://afowebdev.000webhostapp.com/Housing/index.html">Check it
                        out</a></button>
            </article>

        </section>
    </div>
  )
}

export default About