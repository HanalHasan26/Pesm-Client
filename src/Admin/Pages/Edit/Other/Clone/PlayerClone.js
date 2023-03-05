import { Box, Button, Container, Grid, List, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PlayerState } from '../../../../../Context/PlayersProvider';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import  { Clone } from './CloneBasics';
import AdminStar from '../../../../Assets/AdminStar/Star';
import '../../Other/Trending/AdminTrending.css'
import { useNavigate } from 'react-router-dom';




const useStyles = makeStyles({

  root:{
    backgroundColor:'white',
    borderRadius:'5px'
  }
    
  })


const PlayerClone = ({ setChange}) => {
  const classes = useStyles()
  const { basicData ,fetchPlayers} = PlayerState();
  const [searchTerm, setSearchTerm]= useState('')
  const [singlePlayer, setSinglePlayer] = useState([])
  const [page, setPage] = useState(false)

  useEffect(()=>{
    fetchPlayers()
    },[])

    const accessPlayerData =async(_id)=>{
     const data =await axios.get(`/api/admin/${_id}`,)
     setSinglePlayer(data.data);
     }

     const navigate = useNavigate()

  return (
    <>
    <Button 
    onClick={()=>{  
      setChange(true)
    }} 
    color='primary' 
    variant='contained'
    sx={{marginTop:3,ml:3}}
    >Trending</Button> 
    <Button onClick={()=>{
navigate("/admin/NewAdd")
    }}>AddNew</Button>
<Container>
<Container>
      <input className={classes.root} style={{marginTop:'20px'}} fullWidth  placeholder='SearchHere....' onChange={event => {setSearchTerm(event.target.value)}} />
   </Container>

      <Paper style={{maxHeight: 500, overflow: 'auto'}}>
        <List>
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
       <Grid mt={2} ml={2}>
        <div onClick={()=>{
            accessPlayerData(data._id)
            setPage(true)
        }}>  
        <Box sx={{direction:'revert'}}>
        <Box sx={{direction:'revert'}}>
        <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${data.LevelOnePic}")`, objectFit:"contain"}}/>

    </Box>
        </Box>
        </div>
       </Grid>
        ))}

    </Grid>
        </List>
      </Paper>
      </Container>
{page && <Clone singlePlayer={singlePlayer}/>}
    </>
  )
}

export default PlayerClone
