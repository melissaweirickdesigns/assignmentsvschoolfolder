import React from 'react';
import "../index.css"

export default function Bio() {
    return (
        <div className='about--div'>
            <h1 className='my--name'>Melissa Weirick</h1>
            <h2 className='position-title'>Full Stack Developer</h2>
            <h3 className='website'>melissaweirickdesigns.com</h3>
            <a href='mailto:melissaweirickdesigns@gmail.com'><button className='email--button'>
                <i className='bx bx-envelope email--icon'></i>
                <div className='email--title'>Email</div>
            </button></a>
            <a href='https://www.linkedin.com/in/melissaweirick'><button className='linkedin--button'>
                <i className='bx bxl-linkedin linkedin-icon'></i>
                <div className='linkedin--title'>LinkedIN</div>
            </button></a>
            <h1 className='about-title'>About</h1>
            <div className='about-section'>My hope is to contribute my strengths to making this world a better place for humanity. I have a track record of growth in each company. Dedication and long term commitment show throughout my career. I have had roles in sales, meeting planning, customer service and Management. I have attention to detail and love coding HTML, CSS, Javascript, React and more to come as web development comes with continual learning.</div>
            <h1 className='interests--title'>Interests</h1>
            <div className='interests--section'>Spending time with my family and pets, being outdoors, trying new recipies and of course learning more about Jesus Christ on a daily basis.</div>
        </div>
    )
}