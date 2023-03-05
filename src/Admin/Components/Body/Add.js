import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom'

const Add = () => {
const navigate = useNavigate()

const HandleAllPlayer =()=>{
  navigate("/admin/AdminAllplayers")
}
const HandleLegendary =()=>{
  navigate("/admin/LegendaryPlayers")
}
const HandleStanderd =()=>{
  navigate("/admin/StanderdPlayers")
}
const HandleFeatured =()=>{
  navigate("/admin/FeaturedPlayers")
}

  return (
<Container maxWidth={'sm'} >
   <Grid container bgcolor={'#303F9F'} spacing={6} justifyContent="center" borderRadius={'14px'} mt={5} pb={5} sx={{ boxShadow:3}}>

   <Grid item mr={5} >
    <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={HandleAllPlayer}>
     <Box sx={{cursor:'pointer', boxShadow:3}} height={100} width={170} bgcolor={'#2979FF'} borderRadius={'11px'} textAlign={'center'} pt={4.8}>
         <Typography  color={'white'} fontWeight={600} >ALL PLAYERS</Typography>
     </Box>
   </Button>
   </Grid>

   <Grid item mr={5} >
   <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={HandleStanderd}>
     <Box sx={{cursor:'pointer',boxShadow:3}} height={100} width={170} bgcolor={'#37474F'} borderRadius={'11px'} textAlign={'center'} pt={4.8}>
         <Typography  color={'white'} fontWeight={600} >STANDERD</Typography>
     </Box>
     </Button>
   </Grid>

   <Grid item mr={5} >
   <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={HandleLegendary}>
     <Box sx={{cursor:'pointer',boxShadow:3}} height={100} width={170} bgcolor={'#E53935'} borderRadius={'11px'} textAlign={'center'} pt={4.8}>
         <Typography  color={'white'} fontWeight={600} >LEGENDARY</Typography>
     </Box>
     </Button>
   </Grid>

   <Grid item mr={5} >
   <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={HandleFeatured}>
     <Box sx={{cursor:'pointer',boxShadow:3}} height={100} width={170} bgcolor={'#00796B'} borderRadius={'11px'} textAlign={'center'} pt={4.8}>
         <Typography  color={'white'} fontWeight={600} >FEATURED</Typography>
     </Box>
    </Button>
   </Grid>

   </Grid>
</Container>
  
  )
}

export default Add


