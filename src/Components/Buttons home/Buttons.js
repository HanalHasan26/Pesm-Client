import { Button, Grid } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';



const Buttons = () => {
  
  const navigate = useNavigate()


  return (
<>
<Grid pt={3} container justifyContent={'center'} spacing={2}>
  <Grid  item xs={6} md={2}>
  <Button onClick={()=>{navigate('/allplayers')}} size='large' sx={{borderRadius:'40px',fontWeight:'600' }} fullWidth='200px' variant='contained'>ALL PLAYERS</Button> 
  </Grid>
  <Grid item xs={6} md={2}>
  <Button onClick={()=>{navigate('/standerd')}} size='large' sx={{borderRadius:'40px',fontWeight:'600'}} fullWidth='200px' variant="contained">SATANDARD</Button> 
  </Grid>
  <Grid item xs={6} md={2}>
  <Button onClick={()=>{navigate('/legend')}} size='large' sx={{borderRadius:'40px',fontWeight:'600'}} fullWidth='200px' variant="contained">LENGENDARY</Button> 
  </Grid>
  <Grid item xs={6} md={2}>
  <Button onClick={()=>{navigate('/featured')}} size='large' sx={{borderRadius:'40px',fontWeight:'600'}} fullWidth='200px' variant="contained">FEATURED</Button> 
  </Grid>
  <Grid item xs={6} md={2}>
  <Button onClick={()=>{navigate('/epic')}} size='large' sx={{borderRadius:'40px',fontWeight:'600'}} fullWidth='200px' variant="contained">EPIC</Button> 
  </Grid>
</Grid>
</>
  )
}

export default Buttons