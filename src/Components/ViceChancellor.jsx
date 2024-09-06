import React from 'react'
import assets from '../assets/assets'

const ViceChancellor = () => {
  return (
    
    <section className="txt-img-section dark container">
            <article>
                <h5 className="section-label">Our vice-chancellor</h5>

                <h2 className="main-heading">Prof. Agboola Ayodeji olayinka johnson</h2>

                <p>
                    Being a wetern world lover, i cherish education so much. It's actually one the biggest break-through
                    in the way of life of mankind.
                </p>
            </article>
            <div className="image">
                <img src={assets.vc} alt="hero-img-large" />
            </div>

        </section>
  )
}

export default ViceChancellor
