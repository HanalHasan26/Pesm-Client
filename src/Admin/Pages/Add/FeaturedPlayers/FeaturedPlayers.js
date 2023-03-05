import React, { useEffect,useState } from 'react'
import { Backdrop, Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import './FeaturedPlayers.css'
import AdminStar from '../../../Assets/AdminStar/Star'
import AdminNavBar from '../../../Components/NavBar/AdminNavBar'
import { makeStyles } from '@mui/styles';
import { PlayerState } from '../../../../Context/PlayersProvider'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({

  root:{
    backgroundColor:'white',
    borderRadius:'5px'
  }
    
  })


const AdminFeaturedPlayers = () => {
  const classes = useStyles()
  const { accessPlayerData} = PlayerState();

const [basicData, setBasicData]= useState([])
const [open, setOpen]= useState(false)
const [searchTerm, setSearchTerm]= useState('')

const navigate = useNavigate()


const fetchPlayers =async ()=>{
setOpen(true)
  const {data} = await axios.get("/api/player/Featured");
  setBasicData(data)
  setOpen(false)
}

let total = 0;
for (let i = 0; i < basicData.length; i++) {
    total++;
}

console.log(total);


useEffect(()=>{
fetchPlayers()

},[])

  return ( 
    <Box bgcolor={'#1A237E'} >
       <AdminNavBar/>

   <Container>
      <input className={classes.root} style={{marginTop:'20px'}} fullWidth  placeholder='SearchHere....' onChange={event => {setSearchTerm(event.target.value)}} />
   </Container>

       <Typography ml={4} mt={2} fontWeight={600} color={'white'}>FEATURED ({total})</Typography>
       <Grid container m={0} justifyContent={'center'}>
        {basicData.filter((data)=>{
          if(searchTerm === ''){
            return data
          }else if(data.Fullname.toLowerCase().includes(searchTerm.toLowerCase())){
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
          <Box sx={{direction:'revert'}} className='card1'>
    <div className='number'>{data.Rating}</div> 
    <div className='position'>{data.Position}</div>
    <div style={{backgroundImage:`url(${data.teamPic})`}} className='teamLogo'> </div>
    <div style={{backgroundImage:`url(${data.playerDp})`}} className='playerDp'></div>
    <div className='star'> <AdminStar star={data.star}/> </div> 
    <p className={data.Name.length > 10 ? "pleyerNameLength" : data.Name.length <= 8 ? "pleyerNameLength1" : data.Name.length > 8 ?  "pleyerNameLength2" :'pleyerName'}>{data.Name}</p>
    <p className='playerBody'>188cm 87kg Age:28</p>
    <div style={{backgroundImage:`url(${data.LeaguePic})`}} className='league'></div>
    <p className='Level'>Level</p>
    <p className='LevelCount'>15/15</p>
    <div style={{backgroundImage:`url(${data.nationalityPic})`}} className='country'></div>
    <div style={{backgroundImage:`url(${data.footPic})`}} className='foot'></div>
    <div className='curve'>
      <h1 className='rating'>{data.Condition}</h1>
    </div>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/Screenshot-2022-06-26-23050911.png")'}} className='eLogo'></div>
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

export default AdminFeaturedPlayers