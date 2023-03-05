import React, { useState } from 'react'
import { Box, Button, Container, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import axios from "axios"

const NewAdd = () => {

  const [LevelOnePic, setLevelOnePic] = useState("")
  const [MaxPlayerPic, setMaxPlayer] = useState("")
  const [CardType, setCardType] = useState("")

  const formik =useFormik({
    initialValues:{
    Name:"",
    PrograssionPoint :0,
    Shooting:0,
    Passing:0,
    Dribbling:0,
    Dexterity:0,
    LowerBodyStrength:0,
    AerialStrength:0,
    Defending:0,
    GkOne:0,
    GkTwo:0,
    GkThree:0,
  
    },
   
    
    
    onSubmit: (values) =>{

      console.log(MaxPlayerPic);
       axios.post(
        "https://outrageous-sundress-ant.cyclic.app/api/newPlayer",
        {...values,CardType,LevelOnePic,MaxPlayerPic}
        );
       alert("Added")
    }
  })
  
  const playerPic =(value)=>{ 
  
      console.log(value);
      if(value.type==="image/jpeg"|| value.type==="image/png" ){
      const data = new FormData();
      data.append("file", value);
      data.append("upload_preset", "PESMDATA")
      data.append("cloud_name","dhf2t2ffz")
      fetch("https://api.cloudinary.com/v1_1/dhf2t2ffz/image/upload",{
          method:'post',
          body:data,
      }).then((res)=> res.json())
      .then(data => {
          console.log(data);
          setLevelOnePic(data.url.toString());
          alert("uploaded")
      })
    }
 
  } 

  const playerPicMax =(value)=>{ 
  
    if(value.type==="image/jpeg"|| value.type==="image/png" ){
      const data = new FormData();
      data.append("file", value);
      data.append("upload_preset", "PESMDATA")
      data.append("cloud_name","dhf2t2ffz")
      fetch("https://api.cloudinary.com/v1_1/dhf2t2ffz/image/upload",{
          method:'post',
          body:data,
      }).then((res)=> res.json())
      .then(data => {
          console.log(data);
          setMaxPlayer(data.url.toString());
          alert("uploaded")
      })
  }
  }

  return (
    <>  
       <Box>
        <Container>
        <form noValidate onSubmit={formik.handleSubmit }>
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Name} fullWidth id='Name'  color={'secondary'} label="Name" variant="outlined" />
      <InputLabel sx={{mt:5}}>Card Type</InputLabel>
  <Select
   fullWidth
   onChange={(e)=>{
    setCardType(e.target.value)
}}
   value={CardType}
   id='category'
   label="category" 
  >
    <MenuItem value={'Standerd'}>Standerd</MenuItem>
    <MenuItem value={'Legend'}>Legend</MenuItem>
    <MenuItem value={'Featured'}>Featured</MenuItem>
    <MenuItem value={'Epic'}>Epic</MenuItem>
  </Select>

      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.PrograssionPoint} fullWidth id='PrograssionPoint'  color={'secondary'} label="PrograssionPoint" variant="outlined" />

      <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >Player Lower*</Typography>     
      <input accept="imDefending/*" onChange={(e)=>{
        playerPic(e.target.files[0])
      }}  type={'file'}/>
    </Box>

      <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >Player Max*</Typography>     
      <input accept="imDefending/*" onChange={(e)=>{
        playerPicMax(e.target.files[0])
      }}  type={'file'}/>
    </Box>

      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Shooting} fullWidth id='Shooting' color={'secondary'} label="Shooting" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Passing} fullWidth id='Passing' color={'secondary'} label="Passing" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Dribbling} fullWidth id='Dribbling' color={'secondary'} label="Dribbling Duration" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Dexterity} fullWidth id='Dexterity' color={'secondary'} label="Dexterity" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.LowerBodyStrength} fullWidth id='LowerBodyStrength' color={'secondary'} label="LowerBodyStrength" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.AerialStrength} fullWidth id='AerialStrength' color={'secondary'} label="AerialStrength" variant="outlined" />

      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Defending} id='Defending' fullWidth  color={'secondary'} label="Defending" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.GkOne} id='GkOne' fullWidth  color={'secondary'} label="GkOne" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.GkTwo} id='GkTwo' fullWidth  color={'secondary'} label="GkTwo" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.GkThree} id='GkThree' fullWidth  color={'secondary'} label="GkThree" variant="outlined" />

      <Button 
    type='submit'
    color='primary'
    variant='contained'
    >Submit</Button>

      </form>
        </Container>
       </Box>
    </>
  )
}

export default NewAdd