import { Alert, Box,  Button,  Collapse,  Container,  Grid,  IconButton,  InputLabel,  MenuItem, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import AdminNavBar from '../../Components/NavBar/AdminNavBar';
import {useFormik} from "formik"
import axios from 'axios'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import AdvanceAdd from './Advance/AdvanceAdd';
import { PlayerState } from '../../../Context/PlayersProvider';

 const AddPlayers = ({setTest}) => {

  const {advanceValues,selectedSkills,selectedPlayingStyle,selectedAiStyle,star, setStar} = PlayerState()



const [foot, setFoot] = useState('')
const [footUsage, setFootUsage] = useState('')
const [footAcc, setFootAcc] = useState('')
const [form, setForm] = useState('')
const [injury, setInjury] = useState('')
const [category, setCategory] = useState('')

const [dpLoading, setDpLoading] = useState(false)
const [dpDone, setDpDone] = useState('Submit')
const [leagueLoading, setleagueLoading] = useState(false)
const [leagueDone, setleagueDone] = useState('Submit')
const [nationalityLoading, setNationalityLoading] = useState(false)
const [nationalityDone, setNationalityDone] = useState('Submit')
const [teamLoading, setTeamLoading] = useState(false)
const [teamDone, setTeamDone] = useState('Submit')
const [footLoading, setFootLoading] = useState(false)
const [footDone, setfootDone] = useState('Submit')

const [footPic, setFootPic] =useState('')
const [teamPic, setTeamPic] =useState('')
const [nationalityPic, setNationalityPic] = useState('')
const [playerDp, setPlayerDp] = useState('')
const [LeaguePic, setLeaguePic] = useState('')

const [open, setOpen] = useState(false);
const [alertOpen, setAlertOpen] = useState(false);

const handleToggle = () => {
  setOpen(!open);
};

const select = {star,foot,footUsage,footAcc,form,injury,category}

useEffect(()=>{
  console.log(advanceValues,selectedSkills,selectedPlayingStyle,selectedAiStyle); 
})

const formik =useFormik({
  initialValues:{
    Name:"",
    Fullname:"",
    Team:"",
    League:"",
    Nationality:"",
    Rating:"",
    Contract:"",
    Position:"",
    FullNamePosition:"",
    Age:"",
    Height:"",
    Weight:"",
    Condition:"",
    Price:"",
    level:"",

  },

  
  
  onSubmit: (values) =>{
     axios.post(
      "/api/player",
      {...values,...select,footPic, teamPic, nationalityPic, playerDp, LeaguePic,...advanceValues,selectedSkills,selectedPlayingStyle,selectedAiStyle}
      );
      setOpen(false);
      setAlertOpen(true);
  }
})


const playerPic =(value)=>{ 
  
  if(value.type==="image/jpeg"|| value.type==="image/png" || dpLoading){
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
        setPlayerDp(data.url.toString());
        setDpDone('Done')
        setDpLoading(false)
    })
}
}

const playerLeague =(value)=>{
  if(value.type==="image/jpeg"|| value.type==="image/png" || leagueLoading){
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
        setLeaguePic(data.url.toString());
        setleagueDone('Done')
        setleagueLoading(false)
    })
}
}

const playerNationality =(value)=>{

  if(value.type==="image/jpeg"|| value.type==="image/png" || nationalityLoading){
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
        setNationalityPic(data.url.toString());
        setNationalityDone('Done')
        setNationalityLoading(false)
    })
}

}

const playerTeam = (value) =>{

  if(value.type==="image/jpeg"|| value.type==="image/png" || teamLoading){
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
        setTeamPic(data.url.toString());
        setTeamDone('Done')
        setTeamLoading(false)
    })
}

}

const playerFoot = (value) =>{

  if(value.type==="image/jpeg"|| value.type==="image/png" || footLoading){
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
        setFootPic(data.url.toString());
        setfootDone('Done')
        setFootLoading(false)
    })
}
}




  return (
    <Box>
    <AdminNavBar/>
    
    <Box position={'fixed'} sx={{ width: '100%' }}>
      <Collapse in={alertOpen}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Player Added Success!
        </Alert>
      </Collapse>
    </Box>


    <form noValidate onSubmit={formik.handleSubmit }>
    <Container>
      <Typography ml={"40%"} fontSize='20px' mt={5} fontWeight={600}>BASIC DETAILS</Typography>
      
      <Stack>
      <Button 
       color='primary' 
       variant='contained'
     onClick={()=>{
      setTest(false) 
    }} 
       sx={{marginLeft:'auto',marginTop:'10px'}}
      >ADVANCE</Button>
      </Stack>
      
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Name} fullWidth id='Name'  color={'secondary'} label="Name" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Fullname} fullWidth id='Fullname'  color={'secondary'} label="FullName" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Team} fullWidth id='Team' color={'secondary'} label="Team" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.League} fullWidth id='League' color={'secondary'} label="League" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Nationality} fullWidth id='Nationality' color={'secondary'} label="Nationality" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Rating} fullWidth id='Rating' color={'secondary'} label="Rating" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Contract} fullWidth id='Contract' color={'secondary'} label="Contract Duration" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Position} fullWidth id='Position' color={'secondary'} label="Position" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.FullNamePosition} fullWidth id='FullNamePosition' color={'secondary'} label="FullName Position" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.level} fullWidth id='level' color={'secondary'} label="Level" variant="outlined" />
      
      <InputLabel sx={{mt:5}} >Star</InputLabel>
  <Select
    fullWidth
    onChange={(e)=>{
        setStar(e.target.value)
    }}
    value={star}
    id='star'
    label="5"
  >
    <MenuItem value={'1'}>1</MenuItem>
    <MenuItem value={'2'}>2</MenuItem>
    <MenuItem value={'3'}>3</MenuItem>
    <MenuItem value={'4'}>4</MenuItem>
    <MenuItem value={'5'}>5</MenuItem>
  </Select>


      <InputLabel sx={{mt:5}}>Strong Foot</InputLabel>
  <Select
   fullWidth
   onChange={(e)=>{
       setFoot(e.target.value)
   }}
   value={foot}
   id='foot'
   label="Right"
  >
    <MenuItem value={'Left'}>Left</MenuItem>
    <MenuItem value={'Right'}>Rght</MenuItem>
  </Select>

      <InputLabel sx={{mt:5}}>Weak Foot Usage</InputLabel>
  <Select
   fullWidth
   onChange={(e)=>{
       setFootUsage(e.target.value)
   }}
   value={footUsage}
   id='footUsage'
   label="Right"
  >
    <MenuItem value={'Slightly Low'}>Slightly Low</MenuItem>
    <MenuItem value={'Medium'}>Medium</MenuItem>
    <MenuItem value={'High'}>High</MenuItem>
    <MenuItem value={'Very High'}>Very High</MenuItem>
  </Select>

      <InputLabel sx={{mt:5}}>Weak Foot Acc</InputLabel>
  <Select
   fullWidth
   onChange={(e)=>{
       setFootAcc(e.target.value)
   }}
   value={footAcc}
   id='footAcc'
   label="Right"
  >
    <MenuItem value={'Slightly Low'}>Slightly Low</MenuItem>
    <MenuItem value={'Medium'}>Medium</MenuItem>
    <MenuItem value={'High'}>High</MenuItem>
    <MenuItem value={'Very High'}>Very High</MenuItem>
  </Select>

      <InputLabel sx={{mt:5}}>Form</InputLabel>
  <Select
   fullWidth
   onChange={(e)=>{
       setForm(e.target.value)
   }}
   value={form}
   id='form'
   label="Right"
  >
    <MenuItem value={'Inconsistent'}>Inconsistent</MenuItem>
    <MenuItem value={'Standard'}>Standard</MenuItem>
    <MenuItem value={'Unwavering'}>Unwavering</MenuItem>
  </Select>

      <InputLabel sx={{mt:5}}>Injury Resistance</InputLabel>
  <Select
   fullWidth
   onChange={(e)=>{
    setInjury(e.target.value)
   }}
   value={injury}
   id='Injury'
   label="Right"
  >
    <MenuItem value={'Low'}>Low</MenuItem>
    <MenuItem value={'Medium'}>Medium</MenuItem>
    <MenuItem value={'High'}>High</MenuItem>
  </Select>
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Age} id='Age' fullWidth  color={'secondary'} label="Age" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Height} id='Height' fullWidth  color={'secondary'} label="Height" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Weight} id='Weight' fullWidth  color={'secondary'} label="Weight" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Condition} id='Condition' fullWidth  color={'secondary'} label="Condition" variant="outlined" />
      <TextField sx={{mt:5}} onChange={formik.handleChange} value={formik.values.Price} fullWidth id='Price' color={'secondary'} label="Price" variant="outlined" />

      <InputLabel sx={{mt:5}}>Category</InputLabel>
  <Select
   fullWidth
   onChange={(e)=>{
       setCategory(e.target.value)
   }}
   value={category}
   id='category'
   label="category"
  >
    <MenuItem value={'Standerd'}>Standerd</MenuItem>
    <MenuItem value={'Legend'}>Legend</MenuItem>
    <MenuItem value={'Featured'}>Featured</MenuItem>
    <MenuItem value={'Epic'}>Epic</MenuItem>
  </Select>


    <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >Player Dp*</Typography>     
      <input accept="image/*" onChange={(e)=>{
        playerPic(e.target.files[0])
      }}  type={'file'}/>
    <Grid item mt={1}>
    <LoadingButton onClick={()=>{
      setDpLoading(true)
    }} loading={dpLoading} disabled={dpDone==='Done'}  variant='contained'>
      {dpDone}
    </LoadingButton>
    </Grid>
    </Box>

    <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >League*</Typography>     
      <input accept="image/*" onChange={(e)=>{
        playerLeague(e.target.files[0])
      }} type={'file'}/>
      <Grid item mt={1}>
    <LoadingButton onClick={()=>{
      setleagueLoading(true)
    }} loading={leagueLoading} disabled={leagueDone==='Done'} variant='contained'>
      {leagueDone}
    </LoadingButton>
    </Grid>
    </Box>


    <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >Nationality*</Typography>     
      <input accept="image/*" onChange={(e)=>{
        playerNationality(e.target.files[0])
      }} type={'file'}/>
      <Grid item mt={1}>
    <LoadingButton onClick={()=>{
      setNationalityLoading(true)
    }} loading={nationalityLoading} disabled={nationalityDone==='Done'} variant='contained'>
      {nationalityDone}
    </LoadingButton>
    </Grid>
    </Box>


    <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >Team*</Typography>     
      <input accept="image/*"  onChange={(e)=>{
        playerTeam(e.target.files[0])
      }} type={'file'}/>
      <Grid item mt={1}>
    <LoadingButton onClick={()=>{
      setTeamLoading(true)
    }} loading={teamLoading} disabled={teamDone==='Done'} variant='contained'>
      {teamDone}
    </LoadingButton>
    </Grid>
    </Box>

    
    <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >Strong Foot*</Typography>     
      <input accept="image/*"  onChange={(e)=>{
        playerFoot(e.target.files[0])
      }} type={'file'}/>
      <Grid item mt={1}>
    <LoadingButton onClick={()=>{
      setFootLoading(true)
    }} loading={footLoading} disabled={footDone==='Done'} variant='contained'>
      {footDone}
    </LoadingButton>
    </Grid>
    </Box>

<Box mt={3} justifyContent={'flex-end'} display={'flex'}>
    <Button 
    type='submit'
    color='primary'
    variant='contained'
    onClick={()=>{
      handleToggle()
    }}
    >Submit</Button>
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
</Box>
    </Container>
    </form>
    </Box>
  )
}

export default AddPlayers


export const Add = ()=>{

const [test, setTest] = useState(true)

return(
<>
{test ? <AddPlayers test={test} setTest={setTest} /> : <AdvanceAdd test={test} setTest={setTest}/>}
</>
)

}
