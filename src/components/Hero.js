import React from 'react'
import './Hero.css'
import pfp from '../images/profile.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import mail from '../images/mail.png'
import resume_icon from '../images/resumeicon.png'
import resume from '../documents/Antony_Ni_Resume.pdf'

function Hero() {
    return (
        <div className="hero">
            <img src={pfp} alt='Profile Picture'/>
            <h1>Hi! I'm Antony</h1>
            <h2>Student and Developer at Purdue University</h2>
            <div className='social-container'>
                <a href="https://www.linkedin.com/in/antony-ni-b88091197/" target="_blank"><img src={linkedin} /></a>
                <a href="https://github.com/niantony" target="_blank"><img src={github} /></a>
                <a href="mailto:ni96@purdue.edu"><img src={mail} /></a>
                <a href={resume} target="_blank" rel="noreferrer" title="Resume"><img src={resume_icon} alt="resume"/></a>
            </div>
        </div>
    )
}

export default Hero