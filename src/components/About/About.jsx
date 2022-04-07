import "./About.scss"
import Animate from "../AnimatedLetters/Animate";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngular, faCss3, faHtml5, faJsSquare, faPython, faReact} from "@fortawesome/free-brands-svg-icons";

const About = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {


        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    }, [])
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <Animate letterClass={letterClass} strArray={['A', 'b', 'o','u','t', 'm', 'e']}
                    idx={15}/>
                </h1>
                <p>
                    I 'm very ambitious PhD student looking for internships in Machine learning and Deep Learning to improve myy skills
                    so I can use it in my research work, and industry i the future.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on improving
                    my chops one design problem at a time
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faPython} color='#F06529'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color='#28A4D9'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color='#5ED4F4'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color='#EFD81D'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faCss3} color='#DD0031'/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export  default About
