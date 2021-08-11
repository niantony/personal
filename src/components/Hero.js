import React from 'react'
import './Hero.css'
import pfp from '../images/memoji.png'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

function Hero() {
    return (
        <div className="hero">
            <h1>Hi! I'm Antony</h1>
            <h2>Student and Developer at Purdue University</h2>

            {/* <div className='hero-social'>
                <span><FaGithubSquare /></span>
                <span><FaLinkedin /></span>
                <span><IoIosMail /></span>
            </div> */}

            <img src={pfp} alt='Profile Picture'/>
        </div>
    )
}

export default Hero