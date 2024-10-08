import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
let location = useLocation();

  return (
    <div className={location.pathname ==='/' ? `footer-black` : `footer-white`}>
      <div className='footer-menu'>
        <div>
          <h3>Where Creativity is Engineered.</h3>
        <a className='call-to-action' href='/contact'>Get in Touch &rarr;</a>
        </div>

<div className='footer-links'>
<div>
<h3>LEARN MORE</h3>
<ul>
  <li>
    <a className={location.pathname ==='/' ? `foot-link-black`: `foot-link-white`} href='/services'>Our Services</a>
  </li>
  <li>
    <a className={location.pathname ==='/' ? `foot-link-black`: `foot-link-white`} href='/work'>Work</a>
  </li>
</ul>
</div>

<div>
<h3>FOLLOW US</h3>
<ul>
  <li>
    <a className={location.pathname ==='/' ? `foot-link-black`: `foot-link-white`} href='https://tallerderafa.com/' target='_blank'>Taller De Rafa</a>
  </li>
  <li>
    <a className={location.pathname ==='/' ? `foot-link-black`: `foot-link-white`} href='https://www.instagram.com/fyvesenses/' target='_blank'>Instagram</a>
  </li>
  <li>
    <a className={location.pathname ==='/' ? `foot-link-black`: `foot-link-white`} href='' target='_balnk'>Linkedin</a>
  </li>
  <li>
    <a className={location.pathname ==='/' ? `foot-link-black`: `foot-link-white`} href='mailto:Genesis@fyvesenses.com' target='_blank'>Email</a>
  </li>
</ul>
</div>

</div>
      </div>
<div className='footer-tagline'>
<h1>IT'S ABOUT IDEAS.</h1>
</div>
    </div>
  )
}

export default Footer;