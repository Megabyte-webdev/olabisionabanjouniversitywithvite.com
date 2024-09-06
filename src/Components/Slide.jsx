import React from 'react'
import assets from '../assets/assets'

const Slide = ({ db }) => {
    return (
        <li>
            <img src={assets.hero_img} alt="project1" />
            <h3>{db.title}</h3>
            {db.department && <span>{db.department}</span>}
            {db.content && <p>{db.content}</p>}
            <button className="primary-btn">
                <a href="https://afowebdev.000webhostapp.com/index.html">Check it out
                    <i>&#10095;</i>
                </a>
            </button>

        </li>
    )
}

export default Slide