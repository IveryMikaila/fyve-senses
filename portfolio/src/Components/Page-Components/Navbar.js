import React,{useState} from 'react'
import '../../Styles/Navigation.css';
import Hamburger from 'hamburger-react'


const Navbar = () => {
const [open,setOpen] = useState(false);
const Sidebar = ()=>{
return(<>
<div className='sidebar active'>
  <a className='sidebar-logo' href='/'>
  <h1>Fyve Senses</h1>
  </a>
<hr className='line' />
  <div className='sideBarLinks'>
  <a className='sidebarLink' href='/'>Home</a>
<a className='sidebarLink' href='/about-us'>About</a>
<a className='sidebarLink' href='/our-services'>Our Services</a>
<a className='sidebarLink' href='/work'>Work</a>
<a className='sidebarLink' href='/contact'>Contact Us</a>
  </div>
</div>

</>)
}


  return (
    <>
    <div className='icon-container'>
    <Hamburger size={48} label="Show menu" toggled={open} toggle={setOpen} />
    </div>
{open ? <Sidebar/> : <div className='sidebar'> Nothing to see here</div>}

    </>
  )
}

export default Navbar;