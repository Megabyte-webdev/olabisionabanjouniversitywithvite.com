import React from 'react'
import assets from '../assets/assets'
const Footer = () => {
  return (
    <footer className="container" id="footer">
    <div className="cols">
        <section className="col">
            <h2>Contact Us</h2>
            <p><a href="tel:+2348106244890">(+234)81 062 4890</a></p>
            <p><a href="mailto:afolabimubarak18@gmail.com">afolabimubarak18@gmail.com</a></p>
            <p><a>Olabisi Onabanjo University, Ago Iwoye, Ogun State.</a></p>
        </section>
        <section className="col">
            <h2>Our Campus</h2>
            <p><a href="">EduPortal</a></p>
            <p><a href="#">University Library</a></p>
            <p><a href="#">Inauguration Lecture Series</a></p>
            <p><a href="#">Tetfund Projects</a></p>
            <p><a href="#">Academic Calenders</a></p>
        </section>
        <section className="col">
            <h2>Academics</h2>
            <p><a href="#">Staff Portal</a></p>
            <p><a href="#">Business School</a></p>
            <p><a href="#">Continuing Education</a></p>
            <p><a href="#">Open Distance Learning</a></p>
            <p><a href="#">Research & Linkage</a></p>
        </section>
        <section className="col">
            <h2>Campus Life</h2>
            <p><a href="#">Webmail</a></p>
            <p><a href="#">Siwes</a></p>
            <p><a href="#"></a>Alumni</p>
            <p><a href="">Bulletin</a></p>
            <p><a href="#">Career</a></p>
        </section>
    </div>
    <hr />
    <div className="foot-section">
        <img className="logo" src={assets.logo} alt="logo" />
        <small className="copyright">Copyright &copy; 2024 OOU By ICTREC, All rights reserved.</small>
        <section className="social-media">
            <i>
                W
            </i>
            <i>
                F
            </i>
            <i>
                Y
            </i>
        </section>
    </div>
</footer>
  )
}

export default Footer