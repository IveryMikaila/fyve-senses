import React from "react";
import "../src/Styles/Base.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Navbar from "./Components/Page-Components/Navbar";
import Footer from "./Components/Page-Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about-us" element={<About />} />
<Route path="/our-services" element={<Services />} />
<Route path="/work" element={<Work />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>
<Footer />
    </div>
  );
}

export default App;
