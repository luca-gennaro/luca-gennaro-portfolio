import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import "./Contact.scss"
import emailjs from "@emailjs/browser";

const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const refForm = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass("text-animate-hover")
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault()


        emailjs.sendForm(
            "service_8wcdfbi",
            "template_gj4odqm",
            refForm.current,
            "Z0UGu0PYO33slMFky"
        ).then(
            () => {
                alert("Messaggio inviato correttamente!")
                window.location.reload(false)
            },
            () => {
                alert("Invio del messaggio non riuscito, per favore riprovare")
            }
        )
      }

  return (
    <>
        <div className='container contact-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={"Contattami".split("")}
                    idx={15}
                    />
                </h1>
                <p>
                    Compila il form qui sotto per metterti in contatto con me
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Nome' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" name='subject' placeholder='Oggetto' required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Messaggio' required
                                ></textarea>
                            </li>
                            <li>
                               <input type="submit" value="INVIO" className='flat-button'/> 
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default Contact