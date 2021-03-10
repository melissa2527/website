import React, {useEffect} from 'react';
import {techStackData} from './techStackData';
import './techstack.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const TechStack = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='techstack-container'>
            <h2>Tech Stack</h2>
            <div className='techstack'>
                {techStackData.map((tech, index) => {
                    return (
                        <div className='tech-section' key={index}>
                            <div className='circle'>
                                <div className='semi-circle'></div>
                            </div>
                            <h4 data-aos='fade-up'>{tech.category}</h4>
                            <ul data-aos='fade-up'>{tech.subcategory.map(item => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })}
                            </ul>
                            <br/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
