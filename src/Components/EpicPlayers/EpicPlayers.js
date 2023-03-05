import { Backdrop, Box, CircularProgress, Container, Grid } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Star from '../../assets/Star/Star'
import './EpicPlayers.css'
import NavBar from '../NavBar/NavBar'
import { makeStyles } from '@mui/styles';
import { PlayerState } from '../../Context/PlayersProvider';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({

  root:{
    backgroundColor:'white',
    borderRadius:'20px',
  }
    
  })


const EpicPlayers = () => {

  const { accessPlayerData} = PlayerState();

  const classes = useStyles()
  const [open, setOpen]= useState(true)
const [fetchEpicPlayers, setFetchAllPlyers] = useState([])
const [searchTerm, setSearchTerm]= useState('')
const navigate = useNavigate()

const fetchPlayers = async () =>{ 
  const datas = await axios.get('https://outrageous-sundress-ant.cyclic.app/api/player/Epic') 
  setFetchAllPlyers(datas.data)
  setOpen(false)

}  

useEffect(() => {  
 fetchPlayers() 
},[])   

  return (
    <>
    <NavBar/>
    <Container>
   <input className={classes.root} style={{marginTop:'20px'}} fullWidth  placeholder='SearchHere....' onChange={event => {setSearchTerm(event.target.data)}} />
    </Container>
    <Grid container m={0} justifyContent={'center'}>
      {fetchEpicPlayers.filter((data)=>{
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
        <Grid mt={2}>
        <Box sx={{direction:'revert'}} className='card1'>
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
    </>
  )
}

export default EpicPlayers
