import React from 'react'
import './Hero.css'
import flower from '../../assets/flower.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={flower} alt="" style={{ width: "200px", height: "auto" }}/>
        <h1> <span>I'm Paulyne Wambui,</span> a software engineer currently based in Nairobi Kenya.</h1>
        <p>Frontend Engineer with SRE experience, combining strong UI development skills with expertise in system reliability, performance, and deployment automation to deliver scalable, production-ready applications.</p>

        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
