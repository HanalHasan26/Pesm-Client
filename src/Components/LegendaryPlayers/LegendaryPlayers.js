
import React, { useEffect,useState } from 'react'
import { Backdrop, Box, CircularProgress, Container, Grid } from '@mui/material'
import axios from 'axios'
import './LegendaryPlayers.css'
import { makeStyles } from '@mui/styles';
import NavBar from '../NavBar/NavBar'
import { PlayerState } from '../../Context/PlayersProvider';
import { useNavigate } from 'react-router-dom';
import Star from '../../assets/Star/Star';

const useStyles = makeStyles({

  root:{
    backgroundColor:'white',
    borderRadius:'5px'
  }
    
  })


const LegendaryPlayers = () => {
  const classes = useStyles()
  const { accessPlayerData} = PlayerState();

const [basicData, setBasicData]= useState([])
const [open, setOpen]= useState(false)
const [searchTerm, setSearchTerm]= useState('')

const navigate = useNavigate()

const fetchPlayers =async ()=>{
setOpen(true)
  const {data} = await axios.get("https://outrageous-sundress-ant.cyclic.app/api/player/standerd/api/player/Legend");
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
          <div onClick={()=>{
            accessPlayerData(data._id)
            navigate("/allplayers/player")
          }}>
          <Grid mt={2} ml={2}>
          <Box sx={{direction:'revert'}} >
          <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${data.LevelOnePic}")`, objectFit:"contain"}}/>

    </Box>
          </Grid>
          </div>
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

export default LegendaryPlayers 