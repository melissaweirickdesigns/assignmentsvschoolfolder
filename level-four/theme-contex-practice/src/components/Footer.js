import React, {useContext} from 'react';
import {ThemeContext} from '../ThemeContext';

export default function Footer() {

    const value = useContext(ThemeContext);

    return (
        <>
            <div className={`footer-content ${value.value}-mode`}>
                <h3>
                    Melissa Weirick Designs
                </h3>
                <p>One Stop Team App</p>
                <ul className='socials'>
                    <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                    <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                    <li><a href='#'><i className='fa fa-google-plus'></i></a></li>
                    <li><a href='#'><i className='fa fa-youtube'></i></a></li>
                    <li><a href='#'><i className='fa fa-linkedin-square'></i></a></li>
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