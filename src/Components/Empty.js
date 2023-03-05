import { Box } from '@mui/material'
import React, { useState } from 'react'
import { PlayerState } from '../Context/PlayersProvider'

const Empty = () => { 

    const [age, setAge]=useState('')
 
    const { singlePlayer } = PlayerState();  

   
  return (
    <Box bgcolor={'red'} height={'500px'} display='flex' justifyContent={'center'}>
      <Box mt={30}>

<input onChange={(e)=>{setAge(e.target.value)}} placeholder='age'/>
      </Box>

      <h1 style={{backgroundColor:'white'}}>{singlePlayer.Name}</h1>
      <h1 style={{backgroundColor:'white'}}>{age}</h1>
    </Box>
  )
}

export default Empty
