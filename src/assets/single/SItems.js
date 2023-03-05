import { Box, Typography } from '@mui/material'
import React from 'react'
import { PlayerState } from '../../Context/PlayersProvider'




const SItems = () => {  

  const {singlePlayer} = PlayerState()

  return (
    <>     
    
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>Shooting</a> <Box display={"flex"} justifyContent={"flex-end"} ml={115}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.Shooting}</Typography></Box></Typography> 
        </Box> 
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>Passing</a> <Box display={"flex"} justifyContent={"flex-end"} ml={116}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.Passing}</Typography></Box></Typography> 
        </Box> 
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>Dribbling</a> <Box display={"flex"} justifyContent={"flex-end"} ml={116}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.Dribbling}</Typography></Box></Typography> 
        </Box> 
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>Dexterity</a> <Box display={"flex"} justifyContent={"flex-end"} ml={116}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.Dexterity}</Typography></Box></Typography> 
        </Box> 
       <Box mt={2}>
<Typography  borderRadius={"9px"}  color={'white'} bgcolor={"#2979ff"} fontWeight={'300'} fontSize={'20px'} fontFamily='Varela Round' display={'flex'} ><a style={{marginLeft:20,marginTop:4}}>LowerBodyStrength</a> <Box display={"flex"} justifyContent={"flex-end"} ml={100}><Typography  fontWeight={'600'} fontSize={'25px'} fontFamily='Varela Round'>{singlePlayer.LowerBodyStrength}</Typography></Box></Typography> 
        </Box> 
    </>
  )
}

export default SItems