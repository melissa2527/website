import React from 'react';
import {Hero} from './hero/Hero';
import './homepage.scss';
import { ProjectSection } from './projectsection/ProjectSection';
import { TechStack } from './tech/TechStack';
import { AboutSection } from './about/AboutSection';
import { Contact } from '../contact/Contact';

export const HomePage = () => {
    return (
        <div style={{'overflowX': 'hidden'}}>
            <Hero />
            <AboutSection/>
            <TechStack />
            <Contact/>
            <ProjectSection />
        </div>
    )
}
