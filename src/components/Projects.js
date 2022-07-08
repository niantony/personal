import React from 'react'
import './Section.css'
import memoji from '../images/memoji.png'
import wave from '../images/wave.png'
import ratemyportfolio from '../images/ratemyportfolio.png'
import bbLogo from '../images/bestbuy.png'
import firebase from '../images/firebase.png'
import nextjs from '../images/next-js.svg'
import nodejs from '../images/nodejs.png'
import python from '../images/python.png'
import discordpy from '../images/discordpy.png'
import react from '../images/react.png'
import css from '../images/css.png'
import { BiChevronRight } from 'react-icons/bi'

function Projects() {
    return (
        <div className='container-child'>
            <div className='heading'>
                <img src={wave} alt='Heading Memoji'/>
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
                <p>Developed a <span>full-stack</span> web application allowing users to create investment portfolios consisting of securities and rate other user’s portfolios</p>
                <p>Leveraged <span>Firebase Firestore</span> to create a highly scalable database storing user and investment portfolio data to be displayed on authenticated and public routes respectively
                </p>
                <p>Integrated an <span>authentication system</span> where users can sign up and login securely to access user authenticated routes</p>
                <div className='links-container'>
                    <div className='link'>
                        <a href="https://github.com/niantony/ratemyportfolio" target="_blank">Code</a><div className='chevron'><BiChevronRight /></div>
                    </div>    
                    <div className='link'>
                        <a href="https://ratemyportfolio.us/" target="_blank">View</a><div className='chevron'><BiChevronRight /></div>
                    </div>        
                </div>
            </div>

            <div className='list-heading'>
                <img src={bbLogo} alt='Monitor Logo'/>
                <div className='heading-title'>
                    <h2>https://github.com/niantony/product-monitor</h2>
                    <h1>Website Product Monitor</h1>
                </div>
                <div className='stack-container'>
                    <img src={python} alt='Python'/>
                    <img src={discordpy} alt='Discord.py'/>
                </div>
            </div>
            <div className='list-body'>
                <p>Created a product monitor for retail websites (currently supporting BestBuy) using <span>Python</span> to scrape product details and to monitor product availability</p>
                <p>Monitors a range of products from a select website by inserting the desired product ids/skus into the application
                </p>
                <p>Notifies the user of a product restock with <span>Discord.py</span>, through Discord webhooks where the user can add the product directly to cart using an API endpoint
                </p>
                <div className='links-container'>
                    <div className='link'>
                        <a href="https://github.com/niantony/product-monitor" target="_blank">Code</a><div className='chevron'><BiChevronRight /></div>
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
                <p>Created using <span>Reactjs</span> framework</p>
                <div className='links-container'>
                    <div className='link'>
                        <a href="https://github.com/niantony/personal" target="_blank">Code</a><div className='chevron'><BiChevronRight /></div>
                    </div>     
                    <div className='link'>
                        <a href="https://antonyni.com" target="_blank">View</a><div className='chevron'><BiChevronRight /></div>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default Projects