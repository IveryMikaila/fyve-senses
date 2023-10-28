import React from 'react'
import "../../Styles/Navigation.css"


const Footer = () => {
  return (
    <div className='footer'>
 
<div className='quick-links'>
<a href='#' className='footer-link'> FAQ</a>
<a href='#' className='footer-link'>About</a>
<a href='#' className='footer-link'>Services</a>
<a href='#' className='footer-link'>Clients</a>
<a href='#' className='footer-link'>Work</a>
<a href='#' className='footer-link'>Contact</a>
</div>

<div className='footer-message'>
<p className='copyright'>© 2023 Copyright Fyve Senses. <a target='_blank' href='https://mikailaivery.com/'>✨</a></p>
</div>


    </div>
  )
}

export default Footer;