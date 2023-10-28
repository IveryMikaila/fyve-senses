import React,{useEffect} from "react";
import "../src/Styles/Base.css";
import {Route,Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Navbar from "./Components/Page-Components/Navbar";
import Footer from "./Components/Page-Components/Footer";
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation();
function bgColor (){
let app = document.getElementById('App');

if (location.pathname == '/'){
  app.style.backgroundColor = '#fff';
}
else if (location.pathname == '/contact'){
  app.style.backgroundColor = '#000';
} 
else if (location.pathname == '/about-us' || location.pathname == '/our-services' || location.pathname == '/work'){
  app.style.backgroundColor = '#fff';
}
}

useEffect(()=>{
  bgColor();
},[])
  return (
    <div className="App" id="App">
<Navbar />
<AnimatePresence>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about-us" element={<About />} />
<Route path="/our-services" element={<Services />} />
<Route path="/work" element={<Work />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</AnimatePresence>
<Footer />
    </div>
  );
}

export default App;
