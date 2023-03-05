import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../NavBar/NavBar'

const ComingSoon = () => {
  return (
    <>
    <NavBar/>
    <Box display={'flex'} justifyContent='center'>
    <Container>
    <Box mt={30}>
    <Box sx={{display:'flex',justifyContent:'center'}}>            
        <Typography  fontSize={45} fontWeight={600} mt={1}>COMING SOON</Typography>    
    </Box>
    <Box sx={{display:'flex',justifyContent:'center'}}>            
        <Typography  fontSize={20} fontWeight={300} mt={0}>UNDER DEVELOPING</Typography>    
    </Box>
    </Box>
    </Container>
    </Box>
    </>
  )
}

export default ComingSoon
