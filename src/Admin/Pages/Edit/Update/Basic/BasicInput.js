import LoadingButton from '@mui/lab/LoadingButton';
import { Alert,  Box, Button, Collapse, Container, Grid, IconButton, InputLabel, MenuItem, Select,  Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { PlayerState } from '../../../../../Context/PlayersProvider';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import './BasicInput.css'
import AdvanceInput from '../Advance/AdvanceInput';



const BasicInput = ({updatePlayer,setChange}) => {
    const {FetchPlayerData} = PlayerState();

    useEffect(()=>{
      FetchPlayerData()
      
      },[])
      const AdvanceCloneValues = JSON.parse(localStorage.getItem('AdvanceClone'));
      

const [dpLoading, setDpLoading] = useState(false)
const [dpDone, setDpDone] = useState('Update')
const [leagueLoading, setleagueLoading] = useState(false)
const [leagueDone, setleagueDone] = useState('Update')
const [nationalityLoading, setNationalityLoading] = useState(false)
const [nationalityDone, setNationalityDone] = useState('Update')
const [teamLoading, setTeamLoading] = useState(false)
const [teamDone, setTeamDone] = useState('Update')
const [footLoading, setFootLoading] = useState(false)
const [footDone, setfootDone] = useState('Update')


const [alertOpen, setAlertOpen] = useState(false);


var Name = '' 
const NameSet = (e)=>{
    Name = e
}
Name = updatePlayer.Name;

var Fullname = '' 
const FullnameSet = (e)=>{
  Fullname = e
}
Fullname = updatePlayer.Fullname;

var Team = '' 
const TeamSet = (e)=>{
  Team = e
}
Team = updatePlayer.Team;

var League = ''
const LeagueSet = (e)=>{
  League = e
}
League = updatePlayer.League

var Nationality = ''
const NationalitySet = (e)=>{
    Nationality = e
}
Nationality = updatePlayer.Nationality

var Rating = ''
const RatingSet = (e)=>{
  Rating = e
}
Rating = updatePlayer.Rating

var Contract = ''
const ContractSet = (e)=>{
  Contract = e
}
Contract = updatePlayer.Contract

var Age = ''
  const AgeSet = (e)=>{
    Age = e
  }
  Age = updatePlayer.Age

  var Height = ''
  const HeightSet = (e)=>{
    Height = e
  }
  Height = updatePlayer.Height

  var Weight = ''
  const WeightSet = (e)=>{
    Weight = e
  }
  Weight = updatePlayer.Weight

  var Condition = '' 
  const ConditionSet = (e)=>{
    Condition = e
  }
  Condition = updatePlayer.Condition

  var Price = ''
  const PriceSet = (e)=>{
    Price = e
  }
  Price = updatePlayer.Price

  var Position = ''
  const PositionSet = (e)=>{
    Position = e
  }
  Position = updatePlayer.Position

  var star = ''
  const starSet = (e)=>{
    star = e
  }
  star = updatePlayer.star

  var foot = ''
  const footSet =(e)=>{
    foot = e
  }
  foot = updatePlayer.foot

  var footUsage = ''
  const footUsageSet =(e)=>{
    footUsage = e
  }
  footUsage = updatePlayer.footUsage

  var footAcc = ''
  const footAccSet =(e)=>{
    footAcc = e
  }
  footAcc = updatePlayer.footAcc

  var form = ''
  const formSet =(e)=>{
    form = e
  }
  form = updatePlayer.form

  var injury = ''
  const injuryset =(e)=>{
    injury = e
  }
  injury = updatePlayer.injury

  var category = ''
  const categorySet =(e)=>{
    category = e
  }
  category = updatePlayer.category


  
const [dpCheck,setDpCheck] = useState('')
    var playerDp = ''
const playerPic =(value)=>{ 
  
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
          setDpCheck(data.url.toString());
          setDpDone('Done')
          setDpLoading(false)
      })
  }
  if(dpDone === 'Done'){
    console.log(dpCheck);
    playerDp = dpCheck
  }else{
    playerDp = updatePlayer.playerDp
  }
  

  const [leagueCheck,setLeagueCheck] = useState('')
  var LeaguePic = ''
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
          setLeagueCheck(data.url.toString());
          setleagueDone('Done')
          setleagueLoading(false)
      })
  }
  }

  if(leagueDone === 'Done'){
    console.log(leagueCheck);
    LeaguePic = leagueCheck
  }else{
    LeaguePic = updatePlayer.LeaguePic
  }

  
  const [nationalityPicCheck,setnationalityPicCheck] = useState('')
  var nationalityPic = ''
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
          setnationalityPicCheck(data.url.toString());
          setNationalityDone('Done')
          setNationalityLoading(false)
      })
  }
  
  }

  if(nationalityDone === 'Done'){
    console.log(nationalityPicCheck);
    nationalityPic = nationalityPicCheck
  }else{
    nationalityPic = updatePlayer.nationalityPic
  }

  
  const [teamPicCheck,setTeamPicCheck] = useState('')
  var teamPic = ''
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
          setTeamPicCheck(data.url.toString());
          setTeamDone('Done')
          setTeamLoading(false)
      })
  }
  }

  if(teamDone === 'Done'){
    console.log(teamPicCheck);
    teamPic = teamPicCheck
  }else{
    teamPic = updatePlayer.teamPic
  }


  const [footPicCheck,setFootPicCheck] = useState('')
  var footPic =''
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
          setFootPicCheck(data.url.toString());
          setfootDone('Done')
          setFootLoading(false)
      })
  }
  }

  if(footDone === 'Done'){
    console.log(footPicCheck);
    footPic = footPicCheck
  }else{
    footPic = updatePlayer.footPic
  }



  const onSubmit = ()=>{


    const Basic = {Name,Fullname, Team, League, Nationality, Rating, Contract,Age, Height, Weight, Condition, Price, Position}
    const select = {star,foot,footUsage,footAcc,injury,form,category}
    const _id = updatePlayer._id
    console.log(nationalityPic+"adbksjfkde");
       axios.put(
      "/api/admin/update",
      {_id,...Basic,...select,footPic, teamPic, nationalityPic, playerDp, LeaguePic,...AdvanceCloneValues}
      ); 
  
  }


  
 
  return (
    <>
 
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



    <Container container width={'100%'} > 
          
          <Button onClick={()=>{
            setChange(false)
          }} 
          color='primary'
          variant='contained'
          >ADVANCE</Button>     


      <input onChange={(e)=>{NameSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Name}  placeholder='Name' id='Name'  /> 

      <input onChange={(e)=>{FullnameSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Fullname}  placeholder='Fullname' id='Fullname'  /> 

      <input onChange={(e)=>{TeamSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Team}  placeholder='Team' id='Team'  /> 
  

      <input onChange={(e)=>{LeagueSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.League}  placeholder='League' id='League'  /> 
  

      <input onChange={(e)=>{NationalitySet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Nationality}  placeholder='Nationality' id='Nationality'  /> 
  

      <input onChange={(e)=>{RatingSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Rating}  placeholder='Rating' id='Rating'  /> 
  

      <input onChange={(e)=>{ContractSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Contract}  placeholder='Contract' id='Contract'  /> 
  

      <input onChange={(e)=>{PositionSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Position}  placeholder='Position' id='Position'  /> 
  

      
      <InputLabel style={{marginTop:"20px"}} >Star</InputLabel>
      <input value={updatePlayer.star}/>
  <Select
    onChange={(e)=>{
      starSet(e.target.value)
    }}
    value={star}
    label='Star'
    id='star'
  >
    <MenuItem value={'1'}>1</MenuItem>
    <MenuItem value={'2'}>2</MenuItem>
    <MenuItem value={'3'}>3</MenuItem>
    <MenuItem value={'4'}>4</MenuItem>
    <MenuItem value={'5'}>5</MenuItem>
  </Select>


  <InputLabel sx={{mt:5}}>Strong Foot</InputLabel>
  <input value={updatePlayer.foot}/>
  <Select
   onChange={(e)=>{
     footSet(e.target.value)
    }}
   value={foot}
   id='foot'
   label="Right"
  >
    <MenuItem value={'Left'}>Left</MenuItem>
    <MenuItem value={'Right'}>Rght</MenuItem>
  </Select>

  <InputLabel sx={{mt:5}}>Weak Foot Usage</InputLabel>
  <input value={updatePlayer.footUsage}/>
  <Select
   fullWidth
   onChange={(e)=>{
    footUsageSet(e.target.value)
   }}
   value={footUsage}
   id='foot'
   label="Right"
  >
    <MenuItem value={'Slightly Low'}>Slightly Low</MenuItem>
    <MenuItem value={'Medium'}>Medium</MenuItem>
    <MenuItem value={'High'}>High</MenuItem>
    <MenuItem value={'Very High'}>Very High</MenuItem>
  </Select>

  <InputLabel sx={{mt:5}}>Weak Foot Acc</InputLabel>
  <input  value={updatePlayer.footAcc}/>
  <Select
   fullWidth
   onChange={(e)=>{
       footAccSet(e.target.value)
   }}
   value={footAcc}
   id='foot'
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
       formSet(e.target.value)
   }}
   value={form}
   id='from'
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
    injuryset(e.target.value)
   }}
   value={injury}
   id='from'
   label="Right"
  >
    <MenuItem value={'Low'}>Low</MenuItem>
    <MenuItem value={'Medium'}>Medium</MenuItem>
    <MenuItem value={'High'}>High</MenuItem>
  </Select>


      <input onChange={(e)=>{AgeSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Age}  placeholder='Age' id='Age'  /> 
  
      <input onChange={(e)=>{HeightSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Height}  placeholder='Height' id='Height'  />
  
      <input onChange={(e)=>{WeightSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Weight}  placeholder='Weight' id='Weight' />
  
      <input onChange={(e)=>{ConditionSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Condition}  placeholder='Condition' id='Condition'  />
   
      <input onChange={(e)=>{PriceSet(e.target.value)}}  style={{marginTop:"20px"}} Value={updatePlayer.Price}  placeholder='Price' id='Price'  /> 
  

      <InputLabel sx={{mt:'20px'}}>Category</InputLabel>
      <input value={updatePlayer.category}/> 
  <Select
   onChange={(e)=>{
       categorySet(e.target.value)
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
      <input  accept="image/*" onChange={(e)=>{
        playerPic(e.target.files[0])
      }}  type={'file'}/>
    <Grid item mt={1}>
    <LoadingButton onClick={()=>{
      setDpLoading(true)
      onSubmit()
    }} loading={dpLoading}   variant='contained'>
      {dpDone}
    </LoadingButton>
    </Grid>
    </Box>
 
    <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >League*</Typography>     
      <input  accept="image/*" onChange={(e)=>{
        playerLeague(e.target.files[0])
      }} type={'file'}/>
      <Grid item mt={1}>
    <LoadingButton onClick={()=>{
      setleagueLoading(true)
    }} loading={leagueLoading}  variant='contained'>
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
    }} loading={nationalityLoading}  variant='contained'>
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
    }} loading={teamLoading}  variant='contained'>
      {teamDone}
    </LoadingButton>
    </Grid>
    </Box>

    
    <Box bgcolor={'#29B6F6'} p={2} sx={{mt:5}}>
      <Typography fontWeight={600} >Strong Foot*</Typography>     
      <input  accept="image/*"  onChange={(e)=>{
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


    <Button sx={{mt:5}}fullWidth variant='contained'onClick={onSubmit} >Update</Button>

    </Container>
    </>
  )
}

export default BasicInput

export const Update = ({updatePlayer})=>{

  const [change, setChange] = useState(true)
  
  return( 
  <>
  {change ? <BasicInput updatePlayer={updatePlayer} setChange={setChange} /> : <AdvanceInput updatePlayer={updatePlayer} setChange={setChange}/>}
  </>
  )
  
  }

