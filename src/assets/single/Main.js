import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar/NavBar';
import SinglePlayerCard from '../../Components/SinglePlayer/SinglePlayerCard';
import PTable from './PTable';
import Scard from './SCard/Scard';
import { PlayerState } from '../../Context/PlayersProvider';
import "./SCard/Scard.css"
const Main = () => {

  const {singlePlayer} = PlayerState()
  console.log(singlePlayer);

  return (
    <>
            <NavBar/>
      <Container maxWidth={false}>
      <Box width={'100%'}  sx={{boxShadow:3}} height={{sm:"650px",xs:"1300px",md:"500px",lg:"820px"}}  bgcolor={'white'} mt={10} >

      <Box>
         <Row>  
          <Col className='col-lg-6'> 
         <Box display={"flex"} mt={"40px"} justifyContent={{lg:'center'}} ml={{sm:"50px"}} >
          
         <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${singlePlayer.LevelOnePic}")`, objectFit:"contain"}}/>
         <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${singlePlayer.MaxPlayerPic}")`, objectFit:"contain"}}/>
          </Box>
          </Col>
          <Col>
          <Box display={"flex"} mt={"61px"} justifyContent='center' >

          <Box>       
          <Typography mt={1.5} fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round' display={'flex'} >NAME:<Typography ml={1} fontWeight={'400'} fontSize={'25px'} fontFamily='Varela Round'> Lional Messi</Typography></Typography>
          <Typography mt={1.5} fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round' display={'flex'}>CARD TYPE:<Typography ml={1} fontWeight={'400'} fontSize={'25px'} fontFamily='Varela Round'> Epic</Typography></Typography>
          <Typography mt={1.5} fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round' display={'flex'}>PROGRESSION POINT:<Typography ml={1} fontWeight={'400'} fontSize={'25px'} fontFamily='Varela Round'> 23</Typography></Typography>
          </Box>

          </Box>
          </Col>
        </Row>
      </Box>

      <PTable/>
      </Box>
      </Container>
    </>
  )
}

export default Main