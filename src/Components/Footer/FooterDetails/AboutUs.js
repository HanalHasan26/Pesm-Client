import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'

const AboutUs = () => {
  return (
    <>
    <NavBar/>
    <Container>
             <Box bgcolor={'#e0e0e0'} sx={{marginTop:"100px"}} height={{xs:'1200px',lg:"700px",md:"700px",sm:'700px'}} display='flex' justifyContent={'center'}>
                <Container>
                    <Box sx={{display:'flex',justifyContent:'center'}}>            
                        <Typography  fontSize={45} fontWeight={600} mt={5}>ABOUT US</Typography>    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center'}}>            
                        <Typography  fontSize={30} fontWeight={400} mt={5}>WE HAVE A GREAT KNOWLEDGE IN GAMING</Typography>    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center'}}>            
                        <Typography  fontSize={20} fontWeight={200} mt={5}>WE WILL HELP YOU TO GET VALUABLE KNOWLEDGE ABOUT GAMING. WE FOCUS ON PES 2021 AND EFOOTBALL 2022. OUR WEBSITE WILL BE A HELP FOR YOU TO IMPROVE YOUR GAMING SKILLS. WE HAVE A GREAT BACKGROUND IN GAMING FOR THE LAST 3 YEAR.</Typography>    
                    </Box>

                    <Box mt={5}>
                        <hr/>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'center'}}>            
                        <Typography  fontSize={30} fontWeight={400} mt={5.5}>CHECK OUR STORIES</Typography>    
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'center'}}>            
                        <Typography  fontSize={20} fontWeight={200} mt={5}> WE ARE RUNNING A SUCCESSFUL YOUTUBE CHANNEL FOR THE LAST 3 YEARS. WE WILL HELP GAMER’S TO IMPROVE THERE SKILLS AND GAMING KNOWLEDGE.
                        WE HAVE ANNOUNCED OUR APPLICATION ON GOOGLE PLAY STORE. PESM DATABASE IS A GREAT APP, WHICH HELPS YOU TO KNOW ABOUT FOOTBALL AND GAMING DETAILS.
                        </Typography>    
                    </Box>

                    
                </Container>
             </Box>
    </Container>
             <Box height={10}/>
             <Footer/>
    </>
  )
}

export default AboutUs
