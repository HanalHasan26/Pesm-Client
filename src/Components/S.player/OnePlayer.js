import { Box } from '@mui/material'
import React from 'react'
import MainMobile from '../../assets/single/mobile/Main'
import Main from '../../assets/single/Main'
import { PlayerState } from '../../Context/PlayersProvider'


const OnePlayer = () => {

  const {singlePlayer} = PlayerState()
console.log(singlePlayer);
  return (
    <>
    <Box display={{sm:"none", md:"none",lg:"none"}}>

<MainMobile/>
    </Box>
    <Box display={{xs:"none",sm:"block", md:"block",lg:"block"}}>

   <Main/>
    </Box>
    </>
  )
}

export default OnePlayer 