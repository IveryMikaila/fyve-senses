import React,{useState} from 'react'
import '../../Styles/Navbar.css'
import { Pivot as Hamburger } from 'hamburger-react'

const Navbar = () => {
const [open,setOpen] = useState(false);

function MobileMenu(){
return (<div className='hamburger-menu'>
  <ul>
  <li><a href='/'>Home</a></li>
  <li><a href='/services'>Services</a> </li>
  <li><a href='/work'>Work</a></li>
  <li><a href='/contact'>Contact</a> </li>
</ul>
</div>)
}

  return (
    <>
      <div className='nav-menu'>
<h1>
  <a href='/'>
  fyve-senses
  </a>
</h1>

<ul>
  <li><a href='/'>Home</a></li>
  <li><a href='/services'>Services</a> </li>
  <li><a href='/work'>Work</a></li>
  <li><a href='/contact'>Contact</a> </li>
</ul>
<div className='hamburger'>
<Hamburger toggled={open} toggle={setOpen} />
</div>
{open ? <MobileMenu/> :''}
      </div>
    </>
  )
}

export default Navbar;