import React, { useEffect, useState } from 'react'
import { Backdrop, Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import './AllPlayers.css'
import AdminStar from '../../../Assets/AdminStar/Star'
import AdminNavBar from '../../../Components/NavBar/AdminNavBar'
import { PlayerState } from '../../../../Context/PlayersProvider'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({

  root:{
    backgroundColor:'white',
    borderRadius:'5px'
  }
    
  })

const AdminAllPlayers = () => {

  const classes = useStyles()

 const { basicData, accessPlayerData, open,fetchPlayers} = PlayerState();
 const [basicLength,setbasicLength] = useState()
 const [searchTerm, setSearchTerm]= useState('')

 const navigate = useNavigate()
 
 useEffect(()=>{
  fetchPlayers()
  setbasicLength(basicData.length);
  },[])


  return ( 
    <Box>
       <AdminNavBar/> 
    <Container>
      <input className={classes.root} style={{marginTop:'20px'}} fullWidth  placeholder='SearchHere....' onChange={event => {setSearchTerm(event.target.value)}} />
   </Container>

       <Typography ml={4} mt={2} fontWeight={600} color={'black'}>ALL PLAYERS ({basicLength})</Typography>
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
            navigate("/allplayers/oneplayer")
          }}>
          <Grid mt={2} ml={2}>
          {/* <Box sx={{direction:'revert'}} className='card1'>
    <div className='number'>{data.Rating}</div> 
    <div className='position'>{data.Position}</div>
    <div style={{backgroundImage:`url(${data.teamPic})`}} className='teamLogo'> </div> 
    <div style={{backgroundImage:`url(${data.playerDp})`}} className='playerDp'></div> 
    <div className='star'><AdminStar star={data.star}/></div>  
    <p className={data.Name.length > 10 ? "pleyerNameLength" : data.Name.length <= 8 ? "pleyerNameLength1" : data.Name.length > 8 ?  "pleyerNameLength2" :'pleyerName'}>{data.Name}</p>
    <p className='playerBody'>{data.Height+`cm`} {data.Weight+`kg`} Age:{data.Age}</p>
    <div style={{backgroundImage:`url(${data.LeaguePic})`}} className='league'></div>
    <p className='Level'>Level</p>
    <p className='LevelCount'>15/15</p>
    <div style={{backgroundImage:`url(${data.nationalityPic})`}} className='country'></div>
    <div style={{backgroundImage:`url(${data.footPic})`}} className='foot'></div>
    <div className='curve'>
      <h1 className='rating'>{data.Form}</h1>
    </div>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/Screenshot-2022-06-26-23050911.png")'}} className='eLogo'></div>
    </Box> */}

<img width={"182px"} height={"256px"} className="card123"   style={{backgroundImage:`url("${data.LevelOnePic}")`, objectFit:"contain"}}/>

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

export default AdminAllPlayers 