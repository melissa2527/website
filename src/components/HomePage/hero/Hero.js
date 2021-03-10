import React, {useState, useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Button} from '../../Button';
import {Link} from 'react-router-dom';

export const Hero = () => {
    const [isShown, setIsShown] = useState(true);



    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div className='homepage-container'>
            <div data-aos='fade-down'>
                <h1>Melissa Genger</h1>
                <h2>Web Developer</h2>
                <div className='hero-btns'
                    onMouseEnter={() => setIsShown(false)}
                    onMouseLeave={() => setIsShown(true)}
                >
                    <Button 
                        className='btn'
                        buttonStyle='btn--outline'
                        buttonSize='btn--lge'
                    >
                        <Link to='/projects' id='hero-btn'
                        // style={{'text-decoration': 'none', 'color': 'whitesmoke'}}
                        >
                            {isShown ? 'SEE MORE' : 'SCROLL DOWN'}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}