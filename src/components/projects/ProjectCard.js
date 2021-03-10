import React, {useEffect} from 'react';
import './project.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const ProjectCard = ({project}) => {

    useEffect(() => {
        Aos.init({
            duration: 1500
        }, [])
    })

    return (
        <div className='card' data-aos='fade-up'>
            <div className='img-container'>
                <img src={project.image} alt={project.title} className='card-img'/>
            </div>
            <div className='card-info'>
            <h4>{project.title}</h4>
            <p>{project.tech}</p>
            <div className='card-info--links'>
                <p>Click to access website and code</p>
                <div className='links'>
                    <a href={project.site} target='_blank' rel='noreferrer'>
                        <i className='fas fa-laptop' id='site'/>
                    </a>
                    <a href={project.code} target='_blank' rel='noreferrer'>
                        <i className='fas fa-laptop-code'id='code'/>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}
