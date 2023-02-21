import React, { useState } from 'react'
import "./Sidebar.scss"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='nav-bar'>
            <nav className={showNav ? "mobile-show" : ""}>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size='3x'
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/luca-gennaro/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/luca-gennaro/luca-gennaro'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size='3x'
                className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar