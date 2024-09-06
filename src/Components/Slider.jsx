import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slide from './Slide'
const Slider = ({ showAll, slides, link }) => {
    const [counter, setCounter] = useState(1);
    const sliderOffset = 100 / slides.length;
    return (
        <div className={`slider${showAll ? " faculty-list" : ""}`}>
            <div className="controls">
                <span className={`prev-btn${counter === 0 ? ' hidden' : ''}`} onClick={() => setCounter(counter === 0 ? 0 : counter - 1)}>&#10094;</span>
                <span className={`next-btn${counter === slides.length - 1 ? ' hidden' : ''}`} onClick={() => setCounter(counter === slides.length - 1 ? slides.length - 1 : counter + 1)}>&#10095;</span>
            </div>
            <div className="dots">
                <Link to={link}><button className={`see-more${counter === slides.length - 1 ? ' visible' : ''}`}>See More...</button></Link>
                {
                    slides.map((e, index) => {
                        return (
                            <span key={index} className={`dot${counter === index ? ' active' : ''} ${counter === slides.length - 1 ? ' hidden' : ''}`} onClick={() => setCounter(index)}></span>
                        )
                    })
                }
            </div>
            <ul style={{ "transform": `translateX(${counter * -sliderOffset}% )`, "--slides": `${slides.length}` }}>
                {
                    slides.map((data, index) => {
                        return (
                            <Slide db={data} key={index} />
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Slider