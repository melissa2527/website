import React, {useState, useEffect} from 'react'
import {AboutSection} from '../HomePage/about/AboutSection';
import './aboutme.scss';
import backgroundVideo from '../../assets/video.mp4';

export const AboutMe = () => {
    const [video, setVideo] = useState(false)

    const showVideo = () => {
        if(window.innerWidth <= 700) {
            setVideo(true)
        } else {
            setVideo(false)
        }
    }

    useEffect(() => {
        showVideo();
    }, [])

    window.addEventListener('resize', showVideo);

    return (
        <div className='aboutme-container' style={{'overflowX': 'hidden'}}>
            {video &&
                <div className='video-container'>
                    <video src={backgroundVideo} type='video/mp4' autoPlay loop muted playsInline style={{'max-width': '100%'}} />
                    <h2>Melissa Genger</h2>
                </div>
            }
            <p data-aos='fade-down' className='aboutme-info'>Find me on <a href='https://www.linkedin.com/in/melissa-anne-genger/' target='_blank' rel='noreferrer'>LinkedIn</a></p>
            <AboutSection/>
        </div>
    )
}
