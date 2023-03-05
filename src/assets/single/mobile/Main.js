import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Box, Button, Typography } from '@mui/material';
import Scard from '../SCard/Scard';
import NavBar from '../../../Components/NavBar/NavBar';
import PtableMobile from './PtableMobile';
import { PlayerState } from '../../../Context/PlayersProvider';
const MainMobile = () => {

    const {singlePlayer} = PlayerState()
    console.log(singlePlayer);

  return (
    <>
            <NavBar/>
      <Container maxWidth={false}>
      <Box width={'100%'}  sx={{boxShadow:3}} height={"1060px"}  bgcolor={'white'} mt={10} >

      <Box>
         <Row>  
          <Col className='col-lg-6'> 
         <Box display={"block"} mt={"40px"} justifyContent={{lg:'center',xs:"center"}} ml={3} >
          
    
         <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${singlePlayer.LevelOnePic}")`, objectFit:"contain"}}/>
         <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${singlePlayer.MaxPlayerPic}")`, objectFit:"contain"}}/>
        
          </Box>
          </Col>
          <Col>
          <Box display={"flex"} mt={"61px"} justifyContent='center' >

          <Box>       
          <Typography mt={1.5} fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round' display={'flex'} >NAME:<Typography ml={1} fontWeight={'400'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.Name}</Typography></Typography>
          <Typography mt={1.5} fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round' display={'flex'}>CARD TYPE:<Typography ml={1} fontWeight={'400'} fontSize={'25px'} fontFamily='Varela Round'> {singlePlayer.CardType}</Typography></Typography>
          <Typography mt={1.5} fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round' display={'flex'}>PROGRESSION POINT:<Typography ml={1} fontWeight={'400'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.PrograssionPoint}</Typography></Typography>
          </Box>

          </Box>
          </Col>
        </Row>
      </Box>

    <PtableMobile/>
      </Box>
      </Container>
    </>
  )
}

export default MainMobile