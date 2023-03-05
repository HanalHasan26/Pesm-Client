import { Backdrop, Box, CircularProgress, Container, Grid } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Star from '../../assets/Star/Star'
import './Allplayers.css'
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


const Allplayers = () => {

  const { accessPlayerData} = PlayerState();

  const classes = useStyles()
const [fetchAllPlayers, setFetchAllPlyers] = useState([])
const [searchTerm, setSearchTerm]= useState('')
const [open, setOpen]= useState(true)

const navigate = useNavigate()

const fetchPlayers = async () =>{ 
  const datas = await axios.get('https://outrageous-sundress-ant.cyclic.app/api/player') 
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
   <input className={classes.root} style={{marginTop:'20px'}} fullWidth  placeholder='SearchHere....' onChange={event => {setSearchTerm(event.target.value)}} />
    </Container>
    <Grid container m={0} justifyContent={'center'}>
    {fetchAllPlayers.filter((value)=>{
          if(searchTerm === ''){
            return value
          }else if(value.Name.toLowerCase().includes(searchTerm.toLowerCase())){
              return value
          }else{
            return console.log("hi");
          }
        }) 
      .map(value=>(
        <div onClick={()=>{
          accessPlayerData(value._id)
          navigate("/allplayers/oneplayer") 
        }}>
        <Grid mt={2}>
        <Box sx={{direction:'revert'}} >

        <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${value.LevelOnePic}")`, objectFit:"contain"}}/>

    {/* <div className='number'>{value.Rating}</div> 
    <div className='position'>{value.Position}</div>
    <div style={{backgroundImage:`url(${value.teamPic})`}} className='teamLogo'> </div> 
    <div style={{backgroundImage:`url(${value.playerDp})`}} className='playerDp'></div> 
    <div className='star'><Star star={value.star}/></div>  
    <p className={value.Name.length > 10 ? "pleyerNameLength" : value.Name.length <= 8 ? "pleyerNameLength1" : value.Name.length > 8 ?  "pleyerNameLength2" :'pleyerName'}>{value.Name}</p>
    <p className='playerBody'>{value.Height+`cm`} {value.Weight+`kg`} Age:{value.Age}</p>
    <div style={{backgroundImage:`url(${value.LeaguePic})`}} className='league'></div>
    <p className='Level'>Level</p>
    <p className='LevelCount'>15/15</p>
    <div style={{backgroundImage:`url(${value.nationalityPic})`}} className='country'></div>
    <div style={{backgroundImage:`url(${value.footPic})`}} className='foot'></div>
    <div className='curve'>
      <h1 className='rating'>{value.Form}</h1>
    </div>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/Screenshot-2022-06-26-23050911.png")'}} className='eLogo'></div> */}
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

export default Allplayers


