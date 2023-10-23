import React,{useState} from 'react'
import Hamburger from 'hamburger-react'


const Navbar = () => {
const [open,setOpen] = useState(false);
const Sidebar = ()=>{
return(<>
<div>
<a href='/'>Home</a>
<a href='/about-us'>About</a>
<a href='/our-services'>Our Services</a>
<a href='/work'>Work</a>
<a href='/contact'>Contact Us</a>
</div>

</>)
}



  return (
    <>
<Hamburger toggled={open} toggle={setOpen} />
{open ? <Sidebar/> : <div> Nothing to see here</div>}

    </>
  )
}

export default Navbar;