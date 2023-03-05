import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const ContactUs = () => {
  return (
    <>
    <NavBar/>
     <Container>
     <Box bgcolor={'#e0e0e0'} sx={{marginTop:"100px"}} height={{xs:'600px',lg:"400px",md:"400px",sm:'400px'}} display='flex' justifyContent={'center'}>
                <Container>
                    <Box sx={{display:'flex',justifyContent:'center'}}>            
                        <Typography  fontSize={45} fontWeight={600} mt={5}>CONTACT US</Typography>    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center'}}>            
                        <Typography  fontSize={20} fontWeight={200} mt={5}>IF YOU HAVE ANY QUESTIONS ABOUT US OR ANY CONTENT WE SHARED IN THIS WEBSITE, FEEL FREE TO CONTACT US AT PESTEAMONE@GMAIL.COM</Typography>    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center'}} >            
                        <Typography  fontSize={30} fontWeight={400} mt={5.5}>WE ARE HERE TO HELP!</Typography>    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center'}} >            
                        <Typography  fontSize={30} fontWeight={400} mt={4}>FOLLOW US!</Typography>    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center'}} letterSpacing='10px'>            
                        <a href='https://twitter.com/SILENTGAMERS8'><Typography  fontSize={50} fontWeight={400} mt={0}><TwitterIcon fontSize='large'/></Typography></a> 
                        <a href='https://www.instagram.com/silentGAMERSYT/'><Typography  fontSize={50} fontWeight={400} mt={0}><InstagramIcon fontSize='large'/></Typography></a>  
                        <a href='https://www.youtube.com/c/silentgamersyt'><Typography  fontSize={50} fontWeight={400} mt={0}><YouTubeIcon fontSize='large'/></Typography></a> 
                    </Box>
                    
                </Container>
             </Box>
    </Container>
             <Box height={10}/>
             <Footer/>
    </>
  )
}

export default ContactUs
