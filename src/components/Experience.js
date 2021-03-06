import React from 'react'
import './Section.css'
import angular from '../images/angular.png'
import memoji from '../images/memoji_work.png'
import ford from '../images/fordlogo.jpg'
import mm from '../images/mm.jpg'
import htf from '../images/htf.png'
import java from '../images/java.png'
import react from '../images/react.png'
import ts from '../images/typescript.png'
import postgresql from '../images/postgresql.png'
import mongodb from '../images/mongodb.png'
import express from '../images/express.png'
import nodejs from '../images/nodejs.png'
import { BiChevronRight } from 'react-icons/bi'

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
                <img src={ford} alt='Ford Logo'/>
                <div className='heading-title'>
                    <h2>Software Engineer Intern</h2>
                    <h1>Ford Motor Company</h1>
                    <h3>May 2022 - Present</h3>
                </div>
                <div className='stack-container'>
                    <img src={angular} alt='Angular'/>
                    <img src={ts} alt='Typescript'/>
                    <img src={java} alt='Java'/>
                </div>
            </div>
            <div className='list-body'>
                <p>Working on the <span>Web Based Dealer Ordering</span> team to develop a full-stack application, allowing over <span>3,000</span> dealerships in North America to save their vehicle order preferences</p>
                <p>Utilizing <span>TypeScript</span> and <span>Angular</span> to develop a user interface to save dealership input and creating rigorous unit tests with <span>Jasmine</span> and <span>Karma</span></p>
                <p>Creating a backend server with a <span>RESTful API</span>, handling <span>CRUD</span> functions, using <span>Java</span> and <span>Spring Boot</span> alongside a <span>SQL</span> database</p>
            </div>
            <div className='list-heading'>
                <img src={mm} alt='Mission: Mentor Logo'/>
                <div className='heading-title'>
                    <h2>Software Engineer Intern</h2>
                    <h1>Mission: Mentor</h1>
                    <h3>Aug. 2021 - Dec. 2021</h3>
                </div>
                <div className='stack-container'>
                    <img src={postgresql} alt='PostgreSQL'/>
                    <img src={ts} alt='Typescript'/>
                    <img src={react} alt='React'/>
                </div>
            </div>
            <div className='list-body'>
                <p>Developed a full-stack web application using the <span>PERN</span> (PostgreSQL, Express.js, React.js, Node.js) stack to assist high school students in the college admissions process</p>
                <p>Leveraged <span>React.js</span> to create a seamless and responsive user experience (landing page, user dashboard, scholarships and summer programs pages)</p>
                <p>Implemented a <span>recommendation algorithm</span> to suggest scholarships and summer programs based on the current user???s background, academic profile, and interests</p>
                <div className='links-container'>   
                    <div className='link'>
                        <a href="https://www.missionmentor.org/" target="_blank">View</a><div className='chevron'><BiChevronRight /></div>
                    </div>      
                </div>
            </div>
            <div className='list-heading'>
                <img src={htf} alt='Hack the Future Logo'/>
                <div className='heading-title'>
                    <h2>Backend Developer</h2>
                    <h1>Purdue Hack the Future</h1>
                    <h3>Sep. 2020 - Jan. 2021</h3>
                </div>
                <div className='stack-container'>
                    <img src={mongodb} alt='MongoDB'/>
                    <img src={express} alt='Express'/>
                    <img src={nodejs} alt='Node.js'/>
                </div>
            </div>
            <div className='list-body-last'>
                <p>Worked in an Agile environment to build a web application using the <span>MERN</span> stack for <span>NICHES Land Trust</span> to display and store information about various parks and their respective landmarks and trails</p>
                <p>Incorporated <span>geolocation services</span> to guide users on park trails/hikes using interactive landmarks and waypoints</p>
                <p>Took charge of the backend server by utilizing <span>Express.js</span> and <span>Node.js</span> for server-side development and creating a database with interconnected schemas and models using <span>MongoDB</span> to build a <span>RESTful API</span></p>
            </div>
        </div>
    )
}

export default Experience