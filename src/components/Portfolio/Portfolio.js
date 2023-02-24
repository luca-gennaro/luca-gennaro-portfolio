import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import "./Portfolio.scss"
import portfolioData from "../../data/portfolio.json"

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img src={port.cover} alt="portfolio" className='portfolio-image' />
                                <div className="content">
                                    <p className="title">
                                        {port.title}
                                    </p>
                                    <h4 className="description">{port.description}</h4>
                                    <div className='btn-container'>
                                        <button onClick={() => window.open(port.code)} className='btn'>
                                        Code</button>
                                        <button onClick={() => window.open(port.url)} className='btn'>
                                        Demo</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters
                        strArray={"Portfolio".split("")}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <div>
                    {renderPortfolio(portfolioData.portfolio)}
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Portfolio