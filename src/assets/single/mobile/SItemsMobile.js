import { Box, Typography } from '@mui/material'
import React from 'react'
import { PlayerState } from '../../../Context/PlayersProvider'

const SItemsMobile = () => {
  const {singlePlayer} = PlayerState()



  return (
    <> 
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>Shooting</a> <Box display={"flex"} justifyContent={"flex-end"} ml={26}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.Shooting}</Typography></Box></Typography>
    </Box>
    <Box mt={2}> 
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>Passing</a> <Box display={"flex"} justifyContent={"flex-end"} ml={27}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.Passing}</Typography></Box></Typography>
    </Box>
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>Dribbling</a> <Box display={"flex"} justifyContent={"flex-end"} ml={25.5}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.Dribbling}</Typography></Box></Typography>
    </Box>
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>Dexterity</a> <Box display={"flex"} justifyContent={"flex-end"} ml={25.5}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.Dexterity}</Typography></Box></Typography>
    </Box>
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>LowerBodyStrength</a> <Box display={"flex"} justifyContent={"flex-end"} ml={15.5}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.LowerBodyStrength}</Typography></Box></Typography>
    </Box>
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>AerialStrength</a> <Box display={"flex"} justifyContent={"flex-end"} ml={20.5}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.AerialStrength}</Typography></Box></Typography>
    </Box>
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>Defending</a> <Box display={"flex"} justifyContent={"flex-end"} ml={24.2}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.Defending}</Typography></Box></Typography>
    </Box>
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>Gk 1</a> <Box display={"flex"} justifyContent={"flex-end"} ml={29.5}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.GkOne}</Typography></Box></Typography>
    </Box>
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>Gk 2</a> <Box display={"flex"} justifyContent={"flex-end"} ml={29.5}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.GkTwo}</Typography></Box></Typography>
    </Box> 
    <Box mt={2}>
        <Typography borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'15px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:15,marginTop:4}}>Gk 3</a> <Box display={"flex"} justifyContent={"flex-end"} ml={29.5}><Typography  fontWeight={'600'} fontSize={'15px'} fontFamily='Varela Round'>{singlePlayer.GkThree}</Typography></Box></Typography>
    </Box>
    </>
 
  )
}

export default SItemsMobile