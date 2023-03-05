import { Box } from '@mui/system';
import React from 'react'
import Star from '../../../assets/Star/Star';
import './AdminCard.css'

const Trending = () => {


  return (
    <>
      <Box sx={{direction:'revert'}} className='card'>
    <div className='number'>99</div> 
    <div className='position'>GK</div>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/Lillestrom-1-12.png")'}} className='teamLogo'> </div>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/2_517.png")'}} className='playerDp'></div>
    <div className='star'><Star/></div>
    <p className='pleyerName'>J.Oblak</p>
    <p className='playerBody'>188cm 87kg Age:28</p>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/emb_11-removebg-preview1.png")'}} className='league'></div>
    <p className='Level'>Level</p>
    <p className='LevelCount'>15/15</p>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/p2_13.png")'}} className='country'></div>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/E.Haaland3.jpg")'}} className='foot'></div>
    <div className='curve'>
      <h1 className='rating'>B</h1>
    </div>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/Screenshot-2022-06-26-23050911.png")'}} className='eLogo'></div>
    </Box>
</>

  )
}

export default Trending

