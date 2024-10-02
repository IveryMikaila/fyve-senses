import { Routes, Route, useLocation } from "react-router-dom";
// Components
import NavBar from './Components /Navigation/Navbar'
import Footer from './Components /Navigation/Footer'
import Home from './Components /Pages/Home'
import Services from './Components /Pages/Services'
import Work from './Components /Pages/Work'
import Contact from './Components /Pages/Contact'

// Styles
import './Styles/Global.css'

function App() {
let locattion = useLocation();

  return (
    <div className={locattion.pathname ==='/' ?`App-white`: `App-black` }>
<NavBar />

{/* Pages */}
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />}/>
<Route path="/work" element={<Work/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
<Footer />
    </div>
  );
}

export default App;
