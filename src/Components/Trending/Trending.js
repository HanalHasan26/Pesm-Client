import {  Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Star from '../../assets/Star/Star';
import { PlayerState } from '../../Context/PlayersProvider';
import './Trending.css'

const Trending = () => {
  const { accessPlayerData} = PlayerState();

  const [trendingPlayers, setTrendingPlayers] = useState([])
  const navigate = useNavigate()

  const getTrends =async () =>{
    const data = await axios.get('https://outrageous-sundress-ant.cyclic.app/api/trending/') 
    setTrendingPlayers(data.data)  
  }

  useEffect(()=>{
    getTrends()
  },[])

  if(trendingPlayers === null || trendingPlayers === []){
    alert("Trending is empty")
  }

  return (
    <>
  <Box position={'relative'} top={10} bgcolor={'#ebeeef'} mt={2}>
    <Typography ml={3.5} fontFamily={'monospace'} fontSize={'30px'} fontWeight={600}>TRENDING</Typography>
  </Box>
    <Stack className='stackScroll' sx={{ 
  padding: '16px 16px 32px',
  backgroundColor: '#ebeeef',
  borderRadius: '4px', 
  overflowX: 'scroll',
  overflowY: 'hidden'
}}
direction={'row'}    
     >

<Box display={'flex'}  whiteSpace={'nowrap'}>  
{trendingPlayers.map(data=>(
              <div onClick={()=>{
                accessPlayerData(data._id)
                navigate("/allplayers/onePlayer")  
              }}>
<Box sx={{direction:'revert'}}>
<img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${data.LevelOnePic}")`, objectFit:"contain"}}/>

    </Box>
    </div>
))}
    </Box>
</Stack>
</>

  )
}

export default Trending

