import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import '../../Styles/Navbar.css'
import { Pivot as Hamburger } from 'hamburger-react'
import black_logo from '../../assets /5enses_black.png'
import white_logo from '../../assets /5enses_white.png'

const Navbar = () => {
const [open,setOpen] = useState(false);
let location = useLocation();

function changeLinkColors(){
let navLinks = document.querySelectorAll('.nav-links');
for (let i = 0; i < navLinks.length; i++) {

  if(location.pathname ==='/'){
    navLinks[i].style.color = 'black';
  } else if (location.pathname ==='/services' || location.pathname ==='/work' || location.pathname ==='/contact'){
    navLinks[i].style.color = 'white';
  }

}
}

useEffect(()=>{
changeLinkColors();
},[])

function MobileMenu(){
return (<div className={location.pathname==='/' ? `hamburger-menu`: `hamburger-menu-black`}>
  <ul>
  <li><a className={location.pathname=== '/' ? `ham-links-black` : `ham-links-white`} href='/'>Home</a></li>
  <li><a className={location.pathname=== '/' ? `ham-links-black` : `ham-links-white`} href='/services'>Services</a> </li>
  <li><a className={location.pathname=== '/' ? `ham-links-black` : `ham-links-white`} href='/work'>Work</a></li>
  <li><a className={location.pathname=== '/' ? `ham-links-black` : `ham-links-white`} href='/contact'>Contact</a> </li>
</ul>
</div>)
}

  return (
    <>
      <div className='nav-menu'>
<h1>
  <a href='/'>
<img src={location.pathname ==='/' ? black_logo : white_logo} alt='fyve-senses company logo in black colorway'/>
  </a>
</h1>

<ul>
  <li><a className='nav-links' href='/'>Home</a></li>
  <li><a className='nav-links' href='/services'>Services</a> </li>
  <li><a  className='nav-links' href='/work'>Work</a></li>
  <li><a className='nav-links' href='/contact'>Contact</a> </li>
</ul>
<div className='hamburger'>
<Hamburger toggled={open} toggle={setOpen} color={location.pathname==='/' ? `black` : `white`} />
</div>
{open ? <MobileMenu/> :''}
      </div>
    </>
  )
}

export default Navbar;