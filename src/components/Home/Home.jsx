import React, { useState, useEffect } from 'react'
import "./Home.scss"
import aelabass from "../../assets/images/aelabass.jpg"
import { Link } from 'react-router-dom'
import Animate from '../AnimatedLetters/Animate'
import Logo from './logo/Logo'
import Loader from 'react-loaders'


export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'e', 'l', 'a', 'b', 'a', 's', 's']
    const jobArray = ["P", "h", ".", "D", " ", "S", "t", 'u', "d", "e", "n", 't']

    useEffect(() => {
      
    
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      },4000)
    }, [])
    


  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1><span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> <br/>
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _12`}>'m</span>
            <img src={aelabass} alt="PhD student"></img>
            <Animate letterClass={letterClass} strArray={nameArray}
            id={15}/>
            <br/>
            <Animate letterClass={letterClass} strArray={jobArray}
            idx={15}/>
            </h1>
            <h2>PhD Student in Particle Physics/ Data scientist / React Developer</h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>
        <Logo/>
    </div>
    <Loader type="pacman"/>
    </>
  )
}
