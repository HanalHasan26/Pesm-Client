import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  const navigate = useNavigate()


  const HandleAddPlayer =()=>{
    navigate("/admin/Addplayers")
  }
  const HandleUpdate =()=>{
    navigate("/admin/UpdatePlayers")
  }
  const HandleRemove =()=>{
    navigate("/admin/RemovePlayers")
  }
  const HandleTrending =()=>{
    navigate("/admin/Other")
  }

  return (
    <>
        <Container maxWidth={'sm'} >
   <Grid container bgcolor={'#303F9F'} mb={3} spacing={6} justifyContent="center" borderRadius={'14px'} mt={5} pb={5} sx={{ boxShadow:3}}>
   <Grid item mr={5}>
   <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={HandleAddPlayer}>
     <Box height={100}  sx={{cursor:'pointer',boxShadow:3}}  width={170} bgcolor={'#1B5E20'} borderRadius={'11px'} textAlign={'center'} pt={4.8}>
         <Typography color={'white'} fontWeight={600} >ADD PLAYERS</Typography>
     </Box>
     </Button>
   </Grid>
   <Grid item mr={5}>
   <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={HandleUpdate}>
     <Box height={100} sx={{cursor:'pointer',boxShadow:3}} width={170} bgcolor={'#00838F'} borderRadius={'11px'} textAlign={'center'} pt={4.8}>
         <Typography  color={'white'} fontWeight={600} >UPDATE PLAYERS</Typography>
     </Box>
     </Button>
   </Grid>
   <Grid item mr={5}>
   <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={HandleRemove}>
     <Box height={100} sx={{cursor:'pointer',boxShadow:3}} width={170} bgcolor={'#6A1B9A'} borderRadius={'11px'} textAlign={'center'} pt={4.8}>
         <Typography  color={'white'} fontWeight={600} >REMOVE PLAYERS</Typography>
     </Box>
     </Button>
   </Grid>

   <Grid item mr={5}>
   <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={HandleTrending}>
     <Box height={100} sx={{cursor:'pointer',boxShadow:3}} width={170} bgcolor={'#FF9800'} borderRadius={'11px'} textAlign={'center'} pt={4.8}>
         <Typography  color={'white'} fontWeight={600} >OTHER</Typography>
     </Box>
     </Button>
   </Grid>
   </Grid>
</Container>
    </>
  )
}

export default Edit