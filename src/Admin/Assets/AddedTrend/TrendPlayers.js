import {  Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminStar from '../AdminStar/Star';
import './TrendPlayers.css'

const TrendPlayers = () => {

  const [trendingPlayers, setTrendingPlayers] = useState([])

  const getTrends =async () =>{
    const data = await axios.get('https://outrageous-sundress-ant.cyclic.app/api/trending/')
    setTrendingPlayers(data.data)
  }

  useEffect(()=>{
    getTrends()
  },[])
  const accessPlayerData =async(_id)=>{
    axios.put('https://outrageous-sundress-ant.cyclic.app/api/trending/removeTrending',{_id})
   }

  return (
    <>
      <Box position={'relative'} top={10} bgcolor={'#ebeeef'} mt={2}>
    <Typography ml={3.5} fontFamily={'monospace'} fontSize={'30px'} fontWeight={600}>TRENDING</Typography>
  </Box>
    <Stack  sx={{ 
  padding: '16px 16px 32px',
  backgroundColor: '#ebeeef',
  borderRadius: '4px', 
  overflowX:'scroll',
  overflowY:'hidden'
}}
direction={'row'}
     >

<Box display={'flex'}  whiteSpace={'nowrap'}>
{trendingPlayers.map((data)=>(

  <div onClick={()=>{
     accessPlayerData(data._id)
  }}>
<Box sx={{direction:'revert'}} >
<img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${data.LevelOnePic}")`, objectFit:"contain"}}/>

    </Box>
    </div>
    ))}
    </Box>
</Stack>
</>

  )
}

export default TrendPlayers

