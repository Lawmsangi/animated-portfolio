import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className='about'>
        <h2>About Me</h2>
        <div className="about-content">
            <ul className='about-items'>
                <li className='about-item'>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimied sites</p>
                </li>
                <li className='about-item'>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimised back-end systems and APIs</p>
                </li>
                <li className='about-item'>
                    <h3>UI Designer</h3>
                    <p>I specialize in crafting various landing pages and developing comprehensive design systems to ensure cohesive brand experiences</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default About