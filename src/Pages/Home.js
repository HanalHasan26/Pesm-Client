import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import Skill from '../Components/Skills/Skill'
import Slider from '../Components/Slider/slider'
import Buttons from '../Components/Buttons home/Buttons'
import Trending from '../Components/Trending/Trending'


const Home = () => {

  
  return (
<>
    <NavBar/>
    <Slider/>
    <Buttons/>
    <Trending/>
    <Skill/>
    <Footer/>
</>
  )
}

export default Home