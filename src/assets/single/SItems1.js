import { Box, Typography } from '@mui/material'
import React from 'react'
import { PlayerState } from '../../Context/PlayersProvider'

const SItems1 = () => {
    const {singlePlayer} = PlayerState()

  return (
    <>
      <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>AerialStrength</a> <Box display={"flex"} justifyContent={"flex-end"} ml={105}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.AerialStrength}</Typography></Box></Typography> 
        </Box> 
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>Defending</a> <Box display={"flex"} justifyContent={"flex-end"} ml={115}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.Defending}</Typography></Box></Typography> 
        </Box> 
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>Gk 1</a> <Box display={"flex"} justifyContent={"flex-end"} ml={120}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.GkOne}</Typography></Box></Typography> 
        </Box> 
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>Gk 2</a> <Box display={"flex"} justifyContent={"flex-end"} ml={120}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.GkTwo}</Typography></Box></Typography> 
        </Box> 
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>Gk 3</a> <Box display={"flex"} justifyContent={"flex-end"} ml={120}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.GkThree}</Typography></Box></Typography> 
        </Box>
    </> 
  )
}

export default SItems1