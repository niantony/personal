import React from 'react'
import './Section.css'
import memoji from '../images/memoji.png'
import ratemyportfolio from '../images/ratemyportfolio.png'
import firebase from '../images/firebase.png'
import nextjs from '../images/next-js.svg'
import nodejs from '../images/nodejs.png'
import react from '../images/react.png'
import css from '../images/css.png'
import { BiChevronRight } from 'react-icons/bi'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='container-child'>
            <div className='heading'>
                <img src={memoji} alt='About Memoji'/>
                <div className='heading-title'>
                    <h2>Projects</h2>
                    <h1>My personal projects</h1>
                </div>
            </div>
            <div className='list-heading'>
                <img src={ratemyportfolio} alt='RateMyPortfolio Logo'/>
                <div className='heading-title'>
                    <h2>ratemyportfolio.us</h2>
                    <h1>RateMyPortfolio</h1>
                </div>
                <div className='stack-container'>
                    <img src={firebase} alt='Firebase'/>
                    <img src={nextjs} alt='Next.js'/>
                    <img src={nodejs} alt='Node.js'/>
                </div>
            </div>
            <div className='list-body'>
                <p>RateMyPortfolio is a website to share and rate investment portfolios.</p>
                <p>Utilized Firebase Firestore to create data models, allowing users to submit
                   investments portfolios which will then be saved into the database (Firestore). 
                </p>
                <p>Users can sign up and log in with Firebase Auth. Authenticated routes for users,
                    such as a dashboard to view and delete portfolios.
                </p>
                <div className='links-container'>
                    <div className='link'>
                        <a href="https://google.com" target="_blank">Code</a><div className='chevron'><BiChevronRight /></div>
                    </div>    
                    <div className='link'>
                        <a href="https://google.com" target="_blank">View</a><div className='chevron'><BiChevronRight /></div>
                    </div>        
                </div>
            </div>

            <div className='list-heading'>
                <img src={memoji} alt='Memoji'/>
                <div className='heading-title'>
                    <h2>antonyni.com</h2>
                    <h1>Personal Website</h1>
                </div>
                <div className='stack-container'>
                    <img src={react} alt='React'/>
                    <img src={css} alt='CSS'/>
                </div>
            </div>
            <div className='list-body-last'>
                <p>My personal website to showcase my work experience, personal projects, and
                    for people to get to know me.
                </p>
                <p>Created using Reactjs framework</p>
                <div className='links-container'>
                    <div className='link'>
                        <a href="https://google.com" target="_blank">Code</a><div className='chevron'><BiChevronRight /></div>
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default Projects