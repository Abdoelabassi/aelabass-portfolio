import React from 'react'
import "./Home.scss"
import aelabass from "../../assets/images/aelabass.jpg"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br/> I'm
            <img src={aelabass} alt="PhD student"></img>
            aelabass
            <br/>
            PhD Student, Data Scientist, Web Developer
            </h1>
            <h2>Full Stack Developer/ JavaScript expert/ PhD Student in Particle Physics</h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>
    </div>
  )
}
