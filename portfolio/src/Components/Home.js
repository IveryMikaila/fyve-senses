import React,{useEffect} from 'react'
import "../Styles/Home.css"

const Home = () => {

function introFade(){
  let intro = document.getElementById('pageIntro');
  intro.style.opacity = "0.5"
}
function introFade2(){
  let intro = document.getElementById('pageIntro');
  intro.style.opacity = "0"
}
function introAnimation (){
  let intro = document.getElementById('pageIntro');
intro.style.display ="none"
}

useEffect(()=>{

  setTimeout(introFade, 6005)
  setTimeout(introFade2, 6010)
  setTimeout(introAnimation, 7000)

},[])


  return (
    <div className='homePage'>
      {/* Page Intro Animation */}
<div id='pageIntro' className='pageIntro'>
<h1 id='logo-header' className='logo-header'>
<span className='logo'>Fyve</span> <span className='logo'>Senses</span>
</h1>
</div>


{/* Home Page */}
<div>Home Page</div>

    </div>
  )
}

export default Home;