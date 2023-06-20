import logo from "../assets/Logo.png"
import React from 'react';

export default function Footer() {

    return (
        <>
            <div className={`footer-content`}>
                <div className="logo-section">
                    <img src={logo} alt="Logo" />
                    TaskAssemble
                </div>
                <ul className='socials'>
                    <li><a href='https://www.facebook.com'><i className='fa fa-facebook'></i></a></li>
                    <li><a href='https://www.twitter.com'><i className='fa fa-twitter'></i></a></li>
                    <li><a href='https://www.instagram.com'><i className='fa fa-instagram'></i></a></li>
                    <li><a href='https://www.LinkedIn.com'><i className='fa fa-linkedin-square'></i></a></li>
                </ul>
            </div>
        </>
    )
}