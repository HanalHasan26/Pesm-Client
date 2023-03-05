import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import Select from 'react-select'
import { PlayerState } from '../../../../Context/PlayersProvider'
import AdminNavBar from '../../../Components/NavBar/AdminNavBar'
import AddPlayers from '../AddPlayers'

const AdvanceAdd = ({setTest}) => {

  const dis = false;

const {advanceValues, setAdvanceValues,setSelectedSkills,setSelectedPlayingStyle,setSelectedAiStyle} = PlayerState()



  const skillsName =[
    {
      value:1,
      label:'Scissors Feint'
    },{
      value:2,
      label:"Double Touch"
    }
    ,{
      value:3,
      label:"Flip Flap"
    }
    ,{
      value:4,
      label:"Marseille Turn"
    }
    ,{
      value:5,
      label:"Sombrero"
    }
    ,{
      value:6,
      label:"Chop Turn"
    }
    ,{
      value:8,
      label:"Cut Behind & Turn"
    }
    ,{
      value:9,
      label:"Scotch Move"
    }
    ,{
      value:10,
      label:"Sole Control"
    }
    ,{
      value:11,
      label:"Heading"
    }
    ,{
      value:12,
      label:"Long-Range Curler"
    }
    ,{
      value:13,
      label:"Chip Shot Control"
    }
    ,{
      value:14,
      label:"Long-Range Shooting"
    }
    ,{
      value:15,
      label:"Knuckle Shot"
    }
    ,{
      value:16,
      label:"Dipping Shot"
    }
    ,{
      value:17,
      label:"Rising Shot"
    }
    ,{value:18,label:"Acrobatic Finishing"},{value:19,label:"Heel Trick"},{value:20,label:"First-time Shot"},{value:21,label:"One-touch Pass"}
    ,{
      value:22,
      label:"Through Passing"
    }
    ,{
      value:23,
      label:"Weighted Pass"
    }
    ,{
      value:24,
      label:"Pinpoint Crossing"
    }
    ,{
      value:25,
      label:"Outside Curler"
    }
    ,{
      value:26,
      label:"Rabona"
    }
    ,{
      value:27,
      label:"No Look Pass"
    }
    ,{
      value:28,
      label:"Low Lofted Pass"
    }
    ,{
      value:29,
      label:"GK Low Punt"
    }
    ,{
      value:30, 
      label:"GK High Punt"
    }
    ,{
      value:31,
      label:"Long Throw"
    }
    ,{
      value:32,
      label:"GK Long Throw"
    }
    ,{
      value:33,
      label:"Penalty Specialist"
    }
    ,{
      value:34,
      label:"GK Penalty Saver"
    }
    ,{
      value:35,
      label:"Gamesmanship"
    }
    ,{
      value:36,
      label:"Man Marking"
    }
    ,{
      value:37,
      label:"Track Back"
    }
    ,{
      value:38,
      label:"Interception"
    },{
      value:39,
      label:"Blocker"
    },
    {
      value:40,
      label:"Aerial Superiority"
    }
    ,{
      value:41,
      label:"Sliding Tackle"
    }
    ,{
      value:42,
      label:"Acrobatic Clearance"
    }
    ,{
      value:44,
      label:"Captaincy"
    }
    ,{
      value:45,
      label:"Super-sub"
    }
    ,{
      value:46,
      label:""
    }
    ,{
      value:47,
      label:"Fighting Spirit"
    }
    ,{
      value:48,
      label:"Trickster"
    }
    ,{
      value:49,
      label:"Mazing Run"
    }
    ,{
      value:50,
      label:"Speeding Bullet"
    }
    ,{
      value:51,
      label:"Incisive Run"
    }
    ,{
      value:52,
      label:"Long Ball Expert"
    }
    ,{
      value:53,
      label:"Early Crosser"
    }
    ,{
      value:54,
      label:"Long Ranger"
    }
  ]

  
  const onSkills = (e)=>{
    setSelectedSkills(Array.isArray(e)?e.map(value=>value.label):[])
  }

  const playingStyle = [
    {value:1, label:'Goal Poacher'},{value:2, label:'Dummy Runner'},{value:3, label:'Fox in the Box'},{value:4, label:'Target Man'},{value:5, label:'Deep-Lying Forward'},
    {value:6, label:'Creative Playmaker'},{value:7, label:'Prolific Winger'},{value:8, label:'Roaming Flank'},{value:9, label:'Cross Specialist'},
    {value:10, label:'Classic No. 10'},{value:11, label:'Hole Player'},{value:12, label:'Hole Player'},{value:13, label:'Box-to-Box'},{value:14, label:'The Destroyer'}
    ,{value:15, label:'Anchor Man'},{value:16, label:'Offensive Full-back'},{value:17, label:'Full-back Finisher'},{value:18, label:'Defensive Full-back'},{value:19, label:'Build Up'},{value:20, label:'Extra Frontman'}
    ,{value:21, label:'Offensive Goalkeeper'},{value:22, label:'Offensive Goalkeeper'},{value:23, label:'Defensive Goalkeeper'},{value:24, label:'Trickster'},{value:25, label:'Mazing Run'},{value:26, label:'Speeding Bullet'},
    {value:27, label:'Incisive Run'},{value:28, label:'Long Ball Expert'},{value:29, label:'Early Crosser'},{value:30, label:'Long Ranger'}
  ]


  const onPlayingStyle = selectedOption =>{
    setSelectedPlayingStyle(selectedOption.label);
  }


const AiPlayingStyle = [
  {value:1, label:"Trickster"},{value:2, label:"Agility King"}
  ,{value:3, label:"Speeding Bullet"}
  ,{value:4, label:"Incisive Run"}
  ,{value:5, label:"Long Ball Expert"}
  ,{value:6, label:"Early Crosser"},{value:7, label:"Long Ranger"},
]


const onAiStyle = (e)=>{
  setSelectedAiStyle(Array.isArray(e)?e.map(value=>value.label):[])
}

    const formik =useFormik({
        initialValues:{
          OffensiveA:"",
          Finishing:"",
          KinkingPower:"",
          BallControl:"",
          Dribbling:"",
          TightPossession:"",
          Balance:"",
          LowPass:"",
          LoftedPass:"",
          SetPieceTaking:"",
          Curl:"",
          Speed:"",
          Acceleration:"",
          PhysicalContact:"",
          Stamina:"",
          Heading:"",
          Jumping:"",
          DeffensiveAwareness:"",
          Tackling:"",
          DefensiveEngagement:"",
          Aggression:"",
          GkAwareness:"",
          GkCatching:"",
          GkParrying:"",
          GkReflexes:"",
          GkReach:"",
          PossessionGame:"",
          QuickCounter:"",
          LongBallCounter:"",
          OutWide:"",
          LongBall:""
        },
        
        onSubmit: (values) =>{
          setAdvanceValues(values)
        }
      })

      
  return (
    <>
    <AdminNavBar/>

      <Container>
      <Typography ml={"40%"} fontSize='20px' mt={5} fontWeight={600}>ADVANCE DETAILS</Typography>

      <Stack>
      <Button 
       color='primary'
       variant='contained'
     onClick={()=>{
      setTest(true)
    }} 
       sx={{marginLeft:'auto',marginTop:'10px'}}
      >BASIC</Button> 
      </Stack>
      <form noValidate onSubmit={formik.handleSubmit } >
      <TextField disabled sx={{mt:5}} value={'ATTAKING'} fullWidth  color={'secondary'} label="ATTAKING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.OffensiveA} fullWidth id='OffensiveA'  color={'secondary'} label="Offensive Awarenes" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Finishing} fullWidth id='Finishing'  color={'secondary'} label="Finishing" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.KinkingPower} fullWidth id='KinkingPower'  color={'secondary'} label="Kicking Power" variant="outlined" />

      <TextField disabled sx={{mt:5}} value={'DRIBBLING'} fullWidth  color={'secondary'} label="DRIBBLING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.BallControl} fullWidth id='BallControl'  color={'secondary'} label="BALL CONTROL" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Dribbling} fullWidth id='Dribbling'  color={'secondary'} label="DRIBBLING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.TightPossession} fullWidth id='TightPossession'  color={'secondary'} label="TIGHT POSSESSION" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Balance} fullWidth id='Balance'  color={'secondary'} label="BALANCE" variant="outlined" />

      <TextField disabled sx={{mt:5}} value={'PASSING'} fullWidth  color={'secondary'} label="PASSING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.LowPass} fullWidth id='LowPass'  color={'secondary'} label="LOW PASS" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.LoftedPass} fullWidth id='LoftedPass'  color={'secondary'} label="LOFTED PASS" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.SetPieceTaking} fullWidth id='SetPieceTaking'  color={'secondary'} label="SET PIECE TAKING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Curl} fullWidth id='Curl'  color={'secondary'} label="Curl" variant="outlined" />

      <TextField disabled sx={{mt:5}} value={'PHYSICALITY'} fullWidth  color={'secondary'} label="PHYSICALITY" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Speed} fullWidth id='Speed'  color={'secondary'} label="SPEED" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Acceleration} fullWidth id='Acceleration'  color={'secondary'} label="ACCELERATION" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.PhysicalContact} fullWidth id='PhysicalContact'  color={'secondary'} label="PHYSICAL CONTACT" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Stamina} fullWidth id='Stamina'  color={'secondary'} label="STAMINA" variant="outlined" />

      <TextField disabled sx={{mt:5}} value={'DEFENDING'} fullWidth  color={'secondary'} label="DEFENDING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Heading} fullWidth id='Heading'  color={'secondary'} label="HEADING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Jumping} fullWidth id='Jumping'  color={'secondary'} label="JUMPING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.DeffensiveAwareness} fullWidth id='DeffensiveAwareness'  color={'secondary'} label="DEFENSIVE AWARENESS" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Tackling} fullWidth id='Tackling'  color={'secondary'} label="TACKLING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.DefensiveEngagement} fullWidth id='DefensiveEngagement'  color={'secondary'} label="DEFENSIVE ENGAGEMENT" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.Aggression} fullWidth id='Aggression'  color={'secondary'} label="AGGRESSION" variant="outlined" />

      <TextField disabled sx={{mt:5}} value={'GOALKEEPING'} fullWidth  color={'secondary'} label="GOALKEEPING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.GkAwareness} fullWidth id='GkAwareness'  color={'secondary'} label="GK AWARENESS" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.GkCatching} fullWidth id='GkCatching'  color={'secondary'} label="GK CATCHING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.GkParrying} fullWidth id='GkParrying'  color={'secondary'} label="GK PARRYING" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.GkReflexes} fullWidth id='GkReflexes'  color={'secondary'} label="GK REFLEXES" variant="outlined" />
      <TextField type={'number'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.GkReach} fullWidth id='GkReach'  color={'secondary'} label="GK REACH" variant="outlined" />
      
     
     <Box mt={2}>
     <Select isMulti options={skillsName} placeholder='SKILLS' onChange={onSkills}/>
    </Box>

     <Box mt={3}>
     <Select options={playingStyle} onChange={onPlayingStyle} placeholder='PLAYING STYLE'/>
    </Box>



    <Box mt={3}>
     <Select isMulti options={AiPlayingStyle} onChange={onAiStyle} placeholder='AI PLAYING STYLES'/>
    </Box>

    <TextField disabled sx={{mt:5}} value={'TEAM PLAYSTYLE'} fullWidth  color={'secondary'} label="TEAM PLAYSTYLE" variant="outlined" />
    <TextField type={'text'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.PossessionGame} fullWidth id='PossessionGame'  color={'secondary'} label="PossessionGame" variant="outlined" />
    <TextField type={'text'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.QuickCounter} fullWidth id='QuickCounter'  color={'secondary'} label="QUICK COUNTER" variant="outlined" />
    <TextField type={'text'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.LongBallCounter} fullWidth id='LongBallCounter'  color={'secondary'} label="LONG BALL COUNTER " variant="outlined" />
    <TextField type={'text'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.OutWide} fullWidth id='OutWide'  color={'secondary'} label="OUT WIDE" variant="outlined" />
    <TextField type={'text'} sx={{mt:3}} onChange={formik.handleChange} value={formik.values.LongBall} fullWidth id='LongBall'  color={'secondary'} label="LONG BALL" variant="outlined" />
      


    <Box mt={3} mb={2} justifyContent={'flex-end'} display={'flex'}>
    <Button 
    type='submit'
    color='primary'
    variant='contained'
    >Submit</Button>
   </Box>
  

      </form>
      </Container>
      { dis===true && <AddPlayers advanceValues={advanceValues} />}
    </>
  )
}

export default AdvanceAdd
