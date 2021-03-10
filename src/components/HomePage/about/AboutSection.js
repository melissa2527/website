import React, {useEffect} from 'react';
import './aboutme.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const AboutSection = () => {
    
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='aboutsection-container'>
            <h2>About Me</h2>
            <div className='about-info'>
                <div className='about-img' data-aos='fade-right'>
                    <img src='/img/aboutme-photo.png' alt='melissa genger'/>
                </div>
                <div className='about-text' data-aos='fade-left'>
                    <img src='/img/about-me.jpg' alt='about section' />
                </div>
            </div>
        </div>
    )
}
