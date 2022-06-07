import React from 'react'
import './Section.css'
import memoji from '../images/memoji.png'

function About() {
    return (
        <div className='container'>
            <div className='heading'>
                <img src={memoji} alt='About Memoji'/>
                <div className='heading-title'>
                    <h2>About</h2>
                    <h1>Read about me</h1>
                </div>
            </div>
            <div className='body'>
                <p>My name is <span>Antony Ni</span>, a student and developer at <span>Purdue University.</span> </p>
                <p>I am a rising junior studying and obtaining a Bachelor's Degree in <span>Computer Science</span> at Purdue University.
                    My interests within the industry lie in <span>full stack development</span>. On the <span>frontend</span>, I enjoy creating beautiful and 
                    seamless user experiences and on the <span>backend</span> I enjoy working with databases and optimizing them.
                </p>
                <p>Aside from the industry, my interests lie in several activities: weight lifting, personal finance, poker, the stock market, and more recently hiking.</p>
            </div>
        </div>
    )
}

export default About