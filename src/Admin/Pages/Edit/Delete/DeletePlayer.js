import { Box, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PlayerState } from '../../../../Context/PlayersProvider';
import AdminStar from '../../../Assets/AdminStar/Star';
import "./DeletePlayers.css"
import DeleteModel from '../../../Assets/DeleteModel/DeleteModel';
import AdminNavBar from '../../../Components/NavBar/AdminNavBar';

const useStyles = makeStyles({

  root:{
    backgroundColor:'white',
    borderRadius:'5px'
  }
    
  })


const DeletePlayer = () => {
  const classes = useStyles()
    const { basicData ,fetchPlayers,singlePlayer,setSinglePlayer } = PlayerState();
    const [searchTerm, setSearchTerm]= useState('')

    const accessPlayerData =async(_id)=>{
      const playerData = await axios.delete(`https://outrageous-sundress-ant.cyclic.app/api/newPlayer/${_id}`)
      setSinglePlayer(playerData.data) 
     }

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

useEffect(()=>{
    fetchPlayers();
},[])


  return (
    <>
    <AdminNavBar/>

{singlePlayer && <DeleteModel open = {open} setOpen={setOpen} singlePlayer={singlePlayer} handleClose={handleClose} />}
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
        handleOpen()  
       }}>
       <Grid mt={2} ml={2}>
       <Box sx={{direction:'revert'}} >
       <img width={"182px"} height={"256px"} className="card1"  style={{backgroundImage:`url("${data.LevelOnePic}")`, objectFit:"contain"}}/>

 </Box>
       </Grid>  
   </div>
   ))}  
   </Grid>
     
  </>
) 
}

export default DeletePlayer
