
import React, { useEffect,useState } from 'react'
import { Backdrop, Box, CircularProgress, Container, Grid } from '@mui/material'
import axios from 'axios'
import './FeaturedPlayers.css'
import { makeStyles } from '@mui/styles';
import NavBar from '../NavBar/NavBar'
import Star from '../../assets/Star/Star';
import { useNavigate } from 'react-router-dom';
import { PlayerState } from '../../Context/PlayersProvider';

const useStyles = makeStyles({

  root:{
    backgroundColor:'white',
    borderRadius:'5px'
  }
    
  })


const FeaturedPlayers = () => {
  const { accessPlayerData} = PlayerState();
  const classes = useStyles()

const [basicData, setBasicData]= useState([])
const [open, setOpen]= useState(false)
const [searchTerm, setSearchTerm]= useState('')

const navigate = useNavigate()


const fetchPlayers =async ()=>{
setOpen(true)
  const {data} = await axios.get("https://outrageous-sundress-ant.cyclic.app/api/player/standerd/api/player/Featured");
  setBasicData(data)
  setOpen(false)
}



useEffect(()=>{
fetchPlayers()

},[])

  return ( 
    <Box>
       <NavBar/>

   <Container>
      <input className={classes.root} style={{marginTop:'20px'}} fullWidth  placeholder='SearchHere....' onChange={event => {setSearchTerm(event.target.value)}} />
   </Container>

       <Grid container m={0} justifyContent={'center'}>
        {basicData.filter((data)=>{
          if(searchTerm === ''){
            return data
          }else if(data.Name.toLowerCase().includes(searchTerm.toLowerCase())){
              return data
          }else{
            return console.log("hi");
          }
        }) 
        .map((data)=>(
       
          <Grid mt={2} ml={2}>
          <div onClick={()=>{
            accessPlayerData(data._id)
            navigate("/allplayers/player")
          }}>
<Box sx={{direction:'revert'}}>
<img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${data.LevelOnePic}")`, objectFit:"contain"}}/>

    </Box>
    </div>
          </Grid>  
          
      ))}  
       </Grid>
       <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}

export default FeaturedPlayers 