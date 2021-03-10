import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='footer-container'>
            <h3>Find More...</h3>
            <div className='footer-items'>
                <a href='https://www.linkedin.com/in/melissa-anne-genger/' alt='linkedin' target='_blank' rel="noreferrer">
                    <i className='fab fa-linkedin item'/>
                </a>
                <Link to='/contact' aria-label='contact'>
                    <i className='fas fa-envelope item'/>
                </Link>
                <a href='https://github.com/melissa2527' alt='github' target='_blank' rel="noreferrer">
                    <i className='fab fa-github item'/>
                </a>
            </div>
            <h6>Melissa Genger - 2021</h6>
        </div>
    )
}
