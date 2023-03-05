import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { PlayerState } from '../../Context/PlayersProvider'
import Add from './Body/Add'
import Edit from './Body/Edit'
import AdminNavBar from './NavBar/AdminNavBar'

const AdminHome = () => {

  const {  fetchPlayers} = PlayerState();
  

  useEffect(()=>{
    fetchPlayers()
  },[])
 

  return (
    <>
    <Box bgcolor={'#1A237E'}>
        <AdminNavBar/>
        <Add/>
        <Edit/>
        <Box height={5}/>
    </Box>
    </>
  )
}

export default AdminHome