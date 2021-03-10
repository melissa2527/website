import React from 'react';
import {projectListData} from '../../projectListData';
import {ProjectCard} from './ProjectCard';
import './project.scss';


export const ProjectList = () => {

    return (
        <div className='page-container'>
            <h2>Project List</h2>
            <p data-aos='fade-down' className='project-info'>Check out the code on <a href='https://github.com/melissa2527' target='_blank' rel='noreferrer'>GitHub</a></p>
            <div className='card-container'>
                {projectListData.map(project => {
                return (
                    <ProjectCard project={project}/>
                )
                })} 
            </div>
        </div>
    )
}
