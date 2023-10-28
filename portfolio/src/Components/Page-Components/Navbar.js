import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import '../../Styles/Navigation.css';
import Hamburger from 'hamburger-react'


const Navbar = () => {
const location = useLocation();
const [open,setOpen] = useState(false);
const [color,setColor] = useState('black');

const Sidebar = ()=>{
return(<>
<div className={location.pathname == '/contact' ? 'sidebar active white' : 'sidebar active' }>

  <a className={location.pathname == '/contact' ? 'sidebar-logo white' : 'sidebar-logo' }href='/'>
  <h1>Fyve Senses</h1>
  </a>

  <div className={location.pathname == '/contact' ? 'sideBarLinks white' : 'sideBarLinks' }>
  <a href='/'>Home</a>
<a href='/about-us'>About</a>
<a href='/our-services'>Our Services</a>
<a href='/work'>Work</a>
<a href='/contact'>Contact Us</a>
  </div>
</div>

</>)
}

function changeNavbar (){
  if (location.pathname == '/'){
    setColor('black')
  }
  else if (location.pathname == '/contact'){
    setColor('white');
  } 
  else if (location.pathname == '/about-us' || location.pathname == '/our-services' || location.pathname == '/work'){
    setColor('pink');
  }
}


useEffect(()=>{
changeNavbar();
},[])
  return (
    <> 
    <div className={location.pathname == '/' ? 'icon-container' : 'iconContainerContact' }>
      <p className={location.pathname == '/' ? 'navLogoHome' : location.pathname == '/contact' ? 'navLogoContact' : 'nav-logo' }>Fyve Senses</p>
    <Hamburger className='menu' color={color} size={48} label="Show menu" toggled={open} toggle={setOpen} />
    </div>

{open ? <Sidebar/> : <div className='sidebar'> Nothing to see here</div>}

    </>
  )
}

export default Navbar;