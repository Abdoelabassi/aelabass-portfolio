import React, { useState } from 'react'
import "./Home.scss"
import aelabass from "../../assets/images/aelabass.jpg"
import { Link } from 'react-router-dom'
import Animate from '../AnimatedLetters/Animate'



export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'e', 'l', 'a', 'b', 'a', 's', 's']
    const jobArray = ["P", "h", ".", "D", " ", "S", "t", 'u', "d", "e", "n", 't']



  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br/> I'm
            <img src={aelabass} alt="PhD student"></img>
            <Animate letterClass={letterClass} strArray={nameArray}
            id={15}/>
            <br/>
            <Animate letterClass={letterClass} strArray={jobArray}
            idx={15}/>
            </h1>
            <h2>Full Stack Developer/ JavaScript expert/ PhD Student in Particle Physics</h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>
    </div>
  )
}
