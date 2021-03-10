import React, {useState, useEffect} from 'react';
import {projectListData} from '../../../projectListData';
import './projectsection.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const ProjectSection = () => {
    const [current, setCurrent] = useState(0);

    const nextPicture = () => {
        setCurrent(current === projectListData.length -1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? projectListData.length - 1: current - 1)
    }

    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    }, [])

    return (
        <div className='project-container'>
            <h2 data-aos='fade-up'>Projects</h2>
            <p data-aos='fade-up' className='project-info'>Check out more on the <a href='/projects'>Projects Page</a> or GitHub <a href='https://github.com/melissa2527' target='_blank' rel='noreferrer'>here</a></p>
            {projectListData.map((image, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (
                            <div>
                            <img src={image.image} alt='' className='image' height={236} width={420}/>
                            <p className='title'>{image.title}</p>
                            </div>
                        )}
                    </div>
                    )
                        })}
             <div className='project--section-btns'>
                <button onClick={prevPicture} data-aos='fade-left' className='left-arrow'><i className="fas fa-arrow-left"></i></button>
                <p>Click the arrows</p>
                <button onClick={nextPicture} data-aos='fade-right' className='right-arrow'><i className="fas fa-arrow-right"></i></button>
            </div>
            <div className='project--section'>
                <img src='./img/computer.png' alt='laptop' className='laptop'/>    
            </div>
        </div>
    )
}
