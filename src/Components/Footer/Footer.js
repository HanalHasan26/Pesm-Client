import { Box, Container, Grid, Stack, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
 const navigate = useNavigate()

  return (
    < >
      <Box display={{xs:'none',sm:'block',md:'block',lg:"block"}} bgcolor={'gray'} p={{md : 1}} mt={5} >
        <Container>
          <Grid container>
            <Grid item xs={12} sm={4} mt={{xs:3}}>
              <Button href='https://in.linkedin.com/in/hanal-hasan-b9ab6a1b8' fontWeight={500}><Typography color={'black'}>© 2023 PESM DATABASE • Developed By <u style={{color:'#4527a0'}}>Hanal</u> </Typography></Button>
            </Grid>

        <Grid item xs={12} sm={4} mt={{xs:3}}>
          <Stack direction={'row'}>
                <Button fontWeight={500}onClick={()=>{
                  navigate('/contactUs')
                }}><Typography color={'black'}>• Contact Us</Typography></Button>
                <Button fontWeight={500} onClick={()=>{
                  navigate('/aboutUs')
                }}><Typography color={'black'}>• About Us</Typography></Button>
                <Button fontWeight={500}onClick={()=>{
                  navigate('/privacyAndPolicy')
                }}><Typography color={'black'}>• Privacy & Policy</Typography></Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={4} mt={{xs:3}}>
          <Stack direction={'row'}>
                <Button fontWeight={500} href='https://twitter.com/SILENTGAMERS8'><Typography color={'black'}>• Twitter</Typography></Button> 
                <Button fontWeight={500} href='https://www.instagram.com/silentGAMERSYT/'><Typography color={'black'}>• Instagram</Typography></Button>
                <Button fontWeight={500} href='https://www.youtube.com/c/silentgamersyt'><Typography color={'black'}>• YouTube</Typography></Button>
          </Stack>
        </Grid>
          </Grid>
          </Container>
      </Box>

      <Box display={{xs:'block',md:"none",sm:"none",lg:"none"}} bgcolor={'gray'} p={{md : 1}} >
        <Container>

                <Box sx={{float:'left'}}>
                <Typography> 
                  <p onClick={()=>{
                    navigate('/contactUs')
                  }}>• Contact Us</p> 
                  <p onClick={()=>{
                    navigate('/aboutUs')
                  }}>• About Us</p> 
                  <p onClick={()=>{
                    navigate('/privacyAndPolicy')
                  }}>• Privacy & Policy</p> 
                </Typography>
                </Box>
                <Box sx={{float:'left'}} display={'flex'} paddingLeft={14} >
                <Typography> 
                  <p><a href='https://twitter.com/SILENTGAMERS8' style={{textDecoration:'none',color:'black'}}>• Twitter</a></p>
                  <p><a href='https://www.instagram.com/silentGAMERSYT/' style={{textDecoration:'none',color:'black'}}>• Instagram</a></p> 
                  <p><a href='https://www.youtube.com/c/silentgamersyt' style={{textDecoration:'none',color:'black'}}>• YouTube</a></p> 
                </Typography>
                </Box>

        </Container> 
        <Typography>
        <Button href='https://in.linkedin.com/in/hanal-hasan-b9ab6a1b8' fontWeight={500}><Typography color={'black'}>© 2023 PESM DATABASE • Developed By <u style={{color:'#4527a0'}}>Hanal</u> </Typography></Button>
        </Typography>
      </Box>
    </>
  )
}

export default Footer
