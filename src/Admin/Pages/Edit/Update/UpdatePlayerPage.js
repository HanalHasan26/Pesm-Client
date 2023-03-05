import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { PlayerState } from '../../../../Context/PlayersProvider'
import AdminNavBar from '../../../Components/NavBar/AdminNavBar'
import Basic from '../Update/Basic/Basic'
import  { Update } from './Basic/BasicInput'




const UpdatePlayerPage = () => {

  const { FetchPlayerData,fetchPlayers,updatePlayer} = PlayerState();


  useEffect(()=>{
    FetchPlayerData()
    fetchPlayers()
    },[])

  return ( 
    <>
      <Box height={'1000px'}>
        <AdminNavBar/>
        <Box display={'flex'} mt={5} justifyContent='center'>
        <Basic FetchPlayerData = {FetchPlayerData} updatePlayer={updatePlayer} />
        </Box>
        <Update updatePlayer={updatePlayer}/>
        </Box> 
    </>
  )
}

export default UpdatePlayerPage
