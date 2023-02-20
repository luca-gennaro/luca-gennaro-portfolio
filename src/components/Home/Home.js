import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoL from "../../assets/images/logo-l.png"
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

import "./Home.scss"
import Loader from 'react-loaders'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["u", "c", "a", " ", "G", "e", "n", "n", "a", "r", "o,"]
  const jobArray = ["W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>C</span>
            <span className={`${letterClass} _8`}>i</span>
            <span className={`${letterClass} _9`}>a</span>
            <span className={`${letterClass} _10`}>o,</span>
            <br />
            <span className={`${letterClass} _11`}>s</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>n</span>
            <span className={`${letterClass} _14`}>o</span>
            <img src={logoL} alt="developer" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26} />
          </h1>
          <h2>Computer and Technology lover / Full Stack Developer</h2>
          <Link to="/contact" className='flat-button'>CONTATTAMI</Link>
        </div>
        <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faNodeJs} color="#9ACD32"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#000000"/>
                        </div>
                    </div>
    
                </div>
        
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home