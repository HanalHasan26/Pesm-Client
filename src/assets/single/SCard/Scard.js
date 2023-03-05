import { Box } from '@mui/system'
import React, { useState } from 'react'
import { PlayerState } from '../../../Context/PlayersProvider'
import "./Scard.css"

const Scard = () => {

  const {singlePlayer} = PlayerState()
console.log(singlePlayer.LevelOnePic);

  return (
    <>
        <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${singlePlayer.LevelOnePic}")`, objectFit:"contain"}}/>
    </>
  )
} 

export default Scard 