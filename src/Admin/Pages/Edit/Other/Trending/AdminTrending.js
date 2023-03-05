import { Box, Button, Container, Grid, List, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PlayerState } from '../../../../../Context/PlayersProvider'
import TrendPlayers from '../../../../Assets/AddedTrend/TrendPlayers'
import { makeStyles } from '@mui/styles';
import AdminStar from '../../../../Assets/AdminStar/Star'
import axios from 'axios'
import PlayerClone from '../Clone/PlayerClone'
import AdminFooter from '../../../../Components/Body/Footer'
import './AdminTrending.css'


const useStyles = makeStyles({

  root:{
    backgroundColor:'white',
    borderRadius:'5px'
  }
    
  })

const AdminTrending = ({change,setChange}) => {
  const classes = useStyles()
const { basicData ,fetchPlayers} = PlayerState();
const [searchTerm, setSearchTerm]= useState('')

useEffect(()=>{
  fetchPlayers()
  },[])

  const accessPlayerData =async(_id)=>{
    axios.put('https://outrageous-sundress-ant.cyclic.app/api/trending/',{_id}) 
    alert("added")
   }

  return (
    <>
    <Button 
    onClick={()=>{
      setChange(false)
    }}
    color='primary' 
    variant='contained'
    sx={{marginTop:3,ml:3}}
    >PlayerClone</Button> 
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
        }}>  
        <Box sx={{direction:'revert'}}>
        <Box sx={{direction:'revert'}} >
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
     <TrendPlayers/>
     <AdminFooter/>
    </>
  )
}

export default AdminTrending


export const TrendingClone = ()=>{

  const [change, setChange] = useState(true)
  
  return( 
  <>
  {change ? <AdminTrending change={change} setChange={setChange} /> : <PlayerClone change={change} setChange={setChange}/>}
  </>
  )
  
  }