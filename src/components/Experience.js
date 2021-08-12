import React from 'react'
import './Section.css'
import memoji from '../images/memoji_work.png'
import htf from '../images/htf.png'
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
                    <h1>My industry experience</h1>
                </div>
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
                <p>Worked with a group of student developers, using the MERN stack, to create a mobile app for <span>NICHES Land Trust</span> organization to guide users through parks and trails.</p>
                <p>Utilized Node.js and Express.js to create RESTful API endpoints.</p>
                <p>Used MongoDB to create a scalable database, storing schemas, models, and data.</p>
            </div>
        </div>
    )
}

export default Experience