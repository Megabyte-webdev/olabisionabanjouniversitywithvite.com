import React from 'react';
import Slider from './Slider';

const Faculties = ({ theme, label, heading, showAll, db }) => {
    return (
        <section className={`txt-img-section ${theme && theme} container`} id="faculties">
            <article>
                <h5 className="section-label light">{label}</h5>
                <h2 className="main-heading">{heading}</h2>
            </article>
            <Slider showAll={showAll} slides={db} link="/all-faculties" />
        </section>
    )
}
export default Faculties