import { Box, Button, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { PlayerState } from '../../Context/PlayersProvider'
import NavBar from '../NavBar/NavBar'
import SingleLarge from './Responsives/SingleLarge'
import SinglePlayerMd from './Responsives/SinglePlayerMd'
import SingleSm from './Responsives/SingleSm'
import SingleXs from './Responsives/SingleXs'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom'

const SinglePlayer = () => {

  const {updatePlayer,FetchPlayerData,open,skills,aiStyle} = PlayerState();
  const navigate = useNavigate()

  useEffect(()=>{
    FetchPlayerData()
  },[])


  return (
    <Box bgcolor={'#f7f8f9'} height={'700px'}>
      <NavBar/>
      <Container  maxWidth={false}>
        <Button sx={{marginTop:5}}
        color='primary'
        variant='contained'
        onClick={()=>{
            navigate("/allplayers")
        }}
        ><KeyboardBackspaceIcon/> BACK</Button>
      <Box sx={{ display: { xs: 'none' ,lg :'block'} }}>
        <SingleLarge  updatePlayer={updatePlayer} skills={skills} aiStyle={aiStyle} open={open}/>
      </Box>     
      <Box sx={{ display: { xs: 'none' ,lg:'none',md:'block'} }}>
        <SinglePlayerMd updatePlayer={updatePlayer} skills={skills} aiStyle={aiStyle} open={open} /> 
      </Box>     
      <Box sx={{ display: { xs: 'none' ,md:'none',sm:'block'} }}>
        <SingleSm updatePlayer={updatePlayer} skills={skills} aiStyle={aiStyle} open={open}/>
      </Box>     
      <Box sx={{ display: { md:'none',sm:'none',xs:'block'} }}>
        <SingleXs updatePlayer={updatePlayer} skills={skills} aiStyle={aiStyle} open={open} />
      </Box>     
    </Container>
    </Box>
  )
}

export default SinglePlayer
