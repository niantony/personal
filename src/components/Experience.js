import React from 'react'
import './Section.css'
import memoji from '../images/memoji_work.png'
import mm from '../images/mm.jpg'
import htf from '../images/htf.png'
import react from '../images/react.png'
import postgresql from '../images/postgresql.png'
import mongodb from '../images/mongodb.png'
import express from '../images/express.png'
import nodejs from '../images/nodejs.png'

function Experience() {
    return (
        <div className='container-child'>
            <div className='heading'>
                <img src={memoji} alt='About Memoji'/>
                <div className='heading-title'>
                    <h2>Experience</h2>
                    <h1>My work experience</h1>
                </div>
            </div>
            <div className='list-heading'>
                <img src={mm} alt='Mission: Mentor Logo'/>
                <div className='heading-title'>
                    <h2>Software Engineer Intern</h2>
                    <h1>Mission: Mentor</h1>
                    <h3>Aug. 2021 - Present</h3>
                </div>
                <div className='stack-container'>
                    <img src={postgresql} alt='PostgreSQL'/>
                    <img src={react} alt='React'/>
                    <img src={nodejs} alt='Node.js'/>
                </div>
            </div>
            <div className='list-body'>
                <p>Developing a full-stack web application using the <span>PERN</span> (PostgreSQL, Express.js, React.js, Node.js) stack to assist high school students in the college admissions process</p>
            </div>
            <div className='list-heading'>
                <img src={htf} alt='Hack the Future Logo'/>
                <div className='heading-title'>
                    <h2>Backend Developer</h2>
                    <h1>Purdue Hack the Future</h1>
                    <h3>Sept. 2020 - Jan. 2021</h3>
                </div>
                <div className='stack-container'>
                    <img src={mongodb} alt='MongoDB'/>
                    <img src={express} alt='Express'/>
                    <img src={nodejs} alt='Node.js'/>
                </div>
            </div>
            <div className='list-body-last'>
                <p>Worked in an Agile Development environment to build a web application using the <span>MERN</span> stack for <span>NICHES Land Trust organization</span> to display and store information about various parks and their respective landmarks and trails</p>
                <p>Incorporated <span>geolocation services</span> to guide users on park trails/hikes using interactive landmarks and waypoints</p>
                <p>Took charge of the backend server by utilizing <span>Express.js</span> and <span>Node.js</span> for server-side development and creating a scalable database with interconnected schemas and models using <span>MongoDB</span> to build a <span>RESTful API</span></p>
                <p>Expressed my ideas and presented any issues/bugs with potential solutions in stand-ups occurring several days per week.</p>
            </div>
        </div>
    )
}

export default Experience