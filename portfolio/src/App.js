import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/aboutus" element={<About />} />
<Route path="/our-services" element={<Services />} />
<Route path="/work" element={<Work />} />
<Route path="/contact" element={<Contact />} />

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
