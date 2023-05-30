import React, {useContext} from 'react';
import {ThemeContext} from '../ThemeContext';

export default function Footer() {

    const value = useContext(ThemeContext);

    return (
        <>
            <div className={`footer-content dark-mode`}>
                <h3>
                    Melissa Weirick Designs
                </h3>
                <p>Ugly Things React App</p>
                <ul className='socials'>
                    <li><a href='https://www.facebook.com'><i className='fa fa-facebook'></i></a></li>
                    <li><a href='https://www.twitter.com'><i className='fa fa-twitter'></i></a></li>
                    <li><a href='https://www.youtube.com'><i className='fa fa-youtube'></i></a></li>
                    <li><a href='https://www.linkedin.com'><i className='fa fa-linkedin-square'></i></a></li>
                </ul>
                <div className={`footer-bottom ${value.value}-mode`}>
                    <p>copyright &copy;2023 Melissa Weirick Designs. Designed by &nbsp;
                        <span>
                            <a href="https://melissaweirickdesigns.github.io/">
                                Melissa Weirick Designs 
                            </a>   
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}