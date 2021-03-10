import React from 'react'
import {AboutSection} from '../HomePage/about/AboutSection';
import './aboutme.scss';

export const AboutMe = () => {
    return (
        <div className='aboutme-container' style={{'overflowX': 'hidden'}}>
            <AboutSection/>
            <p data-aos='fade-down' className='aboutme-info'>Find me on <a href='https://www.linkedin.com/in/melissa-anne-genger/' target='_blank' rel='noreferrer'>LinkedIn</a></p>
        </div>
    )
}
