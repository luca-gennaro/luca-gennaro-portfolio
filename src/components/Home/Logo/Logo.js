import React from 'react'
import heroImage from "../../../assets/images/heroImage.png"
import "./Logo.scss"

const Logo = () => {
  return (
    <div className='logo-container'>
        <img className='solid-logo' src={heroImage} alt="L" />
    </div>
  )
}

export default Logo