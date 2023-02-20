import heroImage from "../../assets/images/heroImage.png"
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import "./About.scss"

const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate")

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
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Chi sono".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>Mi chiamo Luca Gennaro, ho 32 anni. Appassionato di informatica e tecnologia. Inizio da piccolo a "smanettare" e approfondire gli argomenti con delle riviste informatiche e assemblando i miei primi Pc, così da approfondire anche l'aspetto hardware. Conseguo il diploma di Perito Elettronico e Telecomunicazioni. Sperimento software e tecnologie anche nell'ambito della musica, altra passione che mi accompagna da sempre.</p>
                    <p>Una cosa che mi ha da sempre incuriosito e non ho mai approfondito a dovere è la programmazione web, così mi sono messo in gioco frequentando un corso intensivo per diventare Full-Stack Developer e qui ho scoperto un mondo spettacolare e stimolante. Cerco di diventare ogni giorno la versione migliore di me stesso in ogni ambito, mi piace sfidarmi e superare i miei limiti. Il mio obbiettivo è poter dare il mio contributo come programmatore nel realizzare e sviluppare progetti significativi che possano impattare positivamente sulla vita delle persone.</p>
                </div>

                <div className='logo-container'>
                    <img className='solid-logo' src={heroImage} alt="L" />
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About