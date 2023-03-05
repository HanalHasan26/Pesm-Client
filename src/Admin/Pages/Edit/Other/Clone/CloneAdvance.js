import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'
import Select from 'react-select'
import './CloneAdvance.css'

const CloneAdvance = ({setChange,singlePlayer}) => {

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
  
   var selectedSkills = []
    const onSkills = (e)=>{
      selectedSkills = (Array.isArray(e)?e.map(value=>value.label):[])
    }
    selectedSkills = singlePlayer.selectedSkills
  

    const AiPlayingStyle = [
      {value:1, label:"Trickster"},{value:2, label:"Agility King"}
      ,{value:3, label:"Speeding Bullet"}
      ,{value:4, label:"Incisive Run"}
      ,{value:5, label:"Long Ball Expert"}
      ,{value:6, label:"Early Crosser"},{value:7, label:"Long Ranger"},
    ]
    
    var selectedAiStyle = []
    const onAiStyle = (e)=>{
      selectedAiStyle = (Array.isArray(e)?e.map(value=>value.label):[])
    }
    selectedAiStyle = singlePlayer.selectedAiStyle 


    const playingStyle = [
      {value:1, label:'Goal Poacher'},{value:2, label:'Dummy Runner'},{value:3, label:'Fox in the Box'},{value:4, label:'Target Man'},{value:5, label:'Deep-Lying Forward'},
      {value:6, label:'Creative Playmaker'},{value:7, label:'Prolific Winger'},{value:8, label:'Roaming Flank'},{value:9, label:'Cross Specialist'},
      {value:10, label:'Classic No. 10'},{value:11, label:'Hole Player'},{value:12, label:'Hole Player'},{value:13, label:'Box-to-Box'},{value:14, label:'The Destroyer'}
      ,{value:15, label:'Anchor Man'},{value:16, label:'Offensive Full-back'},{value:17, label:'Full-back Finisher'},{value:18, label:'Defensive Full-back'},{value:19, label:'Build Up'},{value:20, label:'Extra Frontman'}
      ,{value:21, label:'Offensive Goalkeeper'},{value:22, label:'Offensive Goalkeeper'},{value:23, label:'Defensive Goalkeeper'},{value:24, label:'Trickster'},{value:25, label:'Mazing Run'},{value:26, label:'Speeding Bullet'},
      {value:27, label:'Incisive Run'},{value:28, label:'Long Ball Expert'},{value:29, label:'Early Crosser'},{value:30, label:'Long Ranger'}
    ]
  
  var selectedPlayingStyle = ''
    const onPlayingStyle = selectedOption =>{
      selectedPlayingStyle = (selectedOption.label);
    }
    selectedPlayingStyle = singlePlayer.selectedPlayingStyle
 

    var OffensiveA =''
    const OffensiveASet = (e)=>{
        OffensiveA = e
    }
    OffensiveA = singlePlayer.OffensiveA

    var Finishing = ''
    const FinishingSet = (e)=>{
        Finishing = e
    }
    Finishing = singlePlayer.Finishing

    var KinkingPower = ''
    const KinkingPowerSet = (e)=>{
        KinkingPower = e
    }
    KinkingPower = singlePlayer.KinkingPower

    var BallControl = ''
    const BallControlSet =(e)=>{
        BallControl = e
    }
    BallControl = singlePlayer.BallControl

    var Dribbling = ''
    const DribblingSet = (e)=>{
        Dribbling = e
    }
    Dribbling = singlePlayer.Dribbling

    var TightPossession = ''
    const TightPossessionSet = (e)=>{
        TightPossession= e
    }
    TightPossession = singlePlayer.TightPossession

    var Balance = ''
    const BalanceSet = (e)=>{ 
        Balance = e
    }
    Balance = singlePlayer.BalanceSet

    var LowPass = ''
    const LowPassSet = (e) =>{
        LowPass = e
    }
    LowPass = singlePlayer.LowPass

    var LoftedPass = ''
    const LoftedPassSet = (e) =>{
        LoftedPass = e
    }
    LoftedPass = singlePlayer.LoftedPass 

    var SetPieceTaking = ''
    const SetPieceTakingSet = (e) =>{
        SetPieceTaking = e
    }
    SetPieceTaking = singlePlayer.SetPieceTaking

    var Curl =''
    const CurlSet = (e) =>{
        Curl = e
    }
    Curl = singlePlayer.Curl

    var Speed = ''
    const SpeedSet = (e) =>{
        Speed = e
    }
    Speed = singlePlayer.Speed

    var Acceleration = ''
    const AccelerationSet = (e) =>{
        Acceleration = e
    }
    Acceleration = singlePlayer.Acceleration

    var PhysicalContact = ''
    const PhysicalContactSet = (e) =>{
        PhysicalContact = e
    }
    PhysicalContact = singlePlayer.PhysicalContact

    var Stamina = ''
    const StaminaSet = (e) =>{
        Stamina = e
    }
    Stamina = singlePlayer.Stamina

    var Heading = ''
    const HeadingSet = (e) =>{
        Heading = e
    }
    Heading = singlePlayer.Heading

    var Jumping = ''
    const JumpingSet = (e) =>{
        Jumping = e
    }
    Jumping = singlePlayer.Jumping

    var DeffensiveAwareness = ''
    const DeffensiveAwarenessSet = (e) =>{
        DeffensiveAwareness = e
    }
    DeffensiveAwareness = singlePlayer.DeffensiveAwareness

    var Tackling = ''
    const TacklingSet = (e) =>{
        Tackling = e
    }
    Tackling = singlePlayer.Tackling

    var DefensiveEngagement = ''
    const DefensiveEngagementSet = (e) =>{
        DefensiveEngagement = e
    }
    DefensiveEngagement = singlePlayer.DefensiveEngagement

    var Aggression = ''
    const AggressionSet = (e) =>{
        Aggression = e
    }
    Aggression = singlePlayer.Aggression

    var GkAwareness = ''
    const GkAwarenessSet = (e) =>{
        GkAwareness = e
    }
    GkAwareness = singlePlayer.GkAwareness

    var GkCatching = ''
    const GkCatchingSet = (e) =>{
        GkCatching = e
    }
    GkCatching = singlePlayer.GkCatching

    var GkParrying = ''
    const GkParryingSet = (e) =>{
      GkParrying = e
    }
    GkParrying = singlePlayer.GkParrying

    var GkReflexes = ''
    const GkReflexesSet = (e) =>{
      GkReflexes = e
    }
    GkReflexes = singlePlayer.GkReflexes

    var GkReach = ''
    const GkReachSet = (e)=>{
      GkReach = e
    }
    GkReach = singlePlayer.GkReach

    var PossessionGame = ''
    const PossessionGameSet = (e)=>{
      PossessionGame = e
    }
    PossessionGame = singlePlayer.PossessionGame

    var QuickCounter = ''
    const QuickCounterSet =(e)=>{
      QuickCounter = e
    }
    QuickCounter = singlePlayer.QuickCounter

    var LongBallCounter = ''
    const LongBallCounterSet = (e) =>{
      LongBallCounter = e
    }
    LongBallCounter = singlePlayer.LongBallCounter

    var OutWide = ''
    const OutWideSet =(e)=>{
      OutWide = e
    }
    OutWide = singlePlayer.OutWide

    var LongBall = ''
    const LongBallSet =(e)=>{
      LongBall = e
    }
    LongBall = singlePlayer.LongBall 
    

    const onSubmit = ()=>{

      const AdvanceCloneValues = {OffensiveA,Finishing,KinkingPower,BallControl,Dribbling,TightPossession,Balance,LowPass,LoftedPass,SetPieceTaking,Curl,Speed,
      Acceleration,PhysicalContact,Stamina,Heading,Jumping,DeffensiveAwareness,Tackling,DefensiveEngagement,Aggression,GkAwareness,
      GkCatching,GkParrying,GkReflexes,GkReach,PossessionGame,QuickCounter,LongBallCounter,
      OutWide,LongBall,selectedAiStyle,selectedSkills,selectedPlayingStyle}
  
      localStorage.setItem('AdvanceClone', JSON.stringify(AdvanceCloneValues));
      console.log(AdvanceCloneValues);
    }
    




 
  return (
    <>
    <Container>
      <Typography ml={"40%"} fontSize='20px' mt={5} fontWeight={600}>ADVANCE DETAILS</Typography>

      <Button 
       color='primary'
       variant='contained'
     onClick={()=>{
      setChange(true)
    }}  
       sx={{marginLeft:'auto',marginTop:'10px'}}
      >BASIC</Button> 
 





  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{OffensiveASet(e.target.value)}} defaultValue={singlePlayer.OffensiveA} id='OffensiveA'  color={'secondary'} placeholder="Offensive Awarenes"  /> 

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{FinishingSet(e.target.value)}} id='Finishing' defaultValue={singlePlayer.Finishing} color={'secondary'} placeholder="Finishing" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{KinkingPowerSet(e.target.value)}} id='KinkingPower' defaultValue={singlePlayer.KinkingPower} color={'secondary'} placeholder="Kicking Power" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} sx={{mt:5}}  fullWidth onChange={(e)=>{BallControlSet(e.target.value)}} id='BallControl' defaultValue={singlePlayer.BallControl} color={'secondary'} placeholder="BALL CONTROL" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{DribblingSet(e.target.value)}} id='Dribbling' defaultValue={singlePlayer.Dribbling} color={'secondary'} placeholder="DRIBBLING" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{TightPossessionSet(e.target.value)}} id='TightPossession' defaultValue={singlePlayer.TightPossession} color={'secondary'} placeholder="TIGHT POSSESSION" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{BalanceSet(e.target.value)}} id='Balance' defaultValue={singlePlayer.Balance} color={'secondary'} placeholder="BALANCE" variant="outlined" />


  <input style={{marginTop:"20px"}} type={'number'} sx={{mt:5}}  fullWidth onChange={(e)=>{LowPassSet(e.target.value)}} id='LowPass' defaultValue={singlePlayer.LowPass} color={'secondary'} placeholder="LOW PASS" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{LoftedPassSet(e.target.value)}} id='LoftedPass' defaultValue={singlePlayer.LoftedPass} color={'secondary'} placeholder="LOFTED PASS" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{SetPieceTakingSet(e.target.value)}} id='SetPieceTaking' defaultValue={singlePlayer.SetPieceTaking} color={'secondary'} placeholder="SET PIECE TAKING" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{CurlSet(e.target.value)}} id='Curl' defaultValue={singlePlayer.Curl} color={'secondary'} placeholder="Curl" variant="outlined" />

 
  <input style={{marginTop:"20px"}} type={'number'} sx={{mt:5}}  fullWidth onChange={(e)=>{SpeedSet(e.target.value)}} id='Speed' defaultValue={singlePlayer.Speed} color={'secondary'} placeholder="SPEED" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{AccelerationSet(e.target.value)}} id='Acceleration' defaultValue={singlePlayer.Acceleration} color={'secondary'} placeholder="ACCELERATION" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{PhysicalContactSet(e.target.value)}} id='PhysicalContact' defaultValue={singlePlayer.PhysicalContact} color={'secondary'} placeholder="PHYSICAL CONTACT" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{StaminaSet(e.target.value)}} id='Stamina' defaultValue={singlePlayer.Stamina} color={'secondary'} placeholder="STAMINA" variant="outlined" />

 
  <input style={{marginTop:"20px"}} type={'number'} sx={{mt:5}}  fullWidth onChange={(e)=>{HeadingSet(e.target.value)}} id='Heading' defaultValue={singlePlayer.Heading} color={'secondary'} placeholder="HEADING" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{JumpingSet(e.target.value)}} id='Jumping' defaultValue={singlePlayer.Jumping} color={'secondary'} placeholder="JUMPING" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{DeffensiveAwarenessSet(e.target.value)}} id='DeffensiveAwareness' defaultValue={singlePlayer.DeffensiveAwareness} color={'secondary'} placeholder="DEFENSIVE AWARENESS" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{TacklingSet(e.target.value)}} id='Tackling' defaultValue={singlePlayer.Tackling} color={'secondary'} placeholder="TACKLING" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{DefensiveEngagementSet(e.target.value)}} id='DefensiveEngagement' defaultValue={singlePlayer.DefensiveEngagement} color={'secondary'} placeholder="DEFENSIVE ENGAGEMENT" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{AggressionSet(e.target.value)}} id='Aggression' defaultValue={singlePlayer.Aggression} color={'secondary'} placeholder="AGGRESSION" variant="outlined" />

 
  <input style={{marginTop:"20px"}} type={'number'} sx={{mt:5}}  fullWidth onChange={(e)=>{GkAwarenessSet(e.target.value)}} id='GkAwareness'  defaultValue={singlePlayer.GkAwareness} color={'secondary'} placeholder="GK AWARENESS" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{GkCatchingSet(e.target.value)}} id='GkCatching' defaultValue={singlePlayer.GkCatching} color={'secondary'} placeholder="GK CATCHING" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{GkParryingSet(e.target.value)}} id='GkParrying' defaultValue={singlePlayer.GkParrying} color={'secondary'} placeholder="GK PARRYING" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{GkReflexesSet(e.target.value)}} id='GkReflexes' defaultValue={singlePlayer.GkReflexes} color={'secondary'} placeholder="GK REFLEXES" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{GkReachSet(e.target.value)}} id='GkReach' defaultValue={singlePlayer.GkReach} color={'secondary'} placeholder="DEFENSIVE ENGAGEMENT" variant="outlined" />

   <Box mt={2}>
   <Select isMulti options={skillsName}  onChange={onSkills} placeholder='SKILLS'/>
    </Box>

    <Box mt={3}>
    <Select options={playingStyle} onChange={onPlayingStyle} placeholder='PLAYING STYLE'/>
  
    </Box>


  <Box mt={3}>
  <Select isMulti options={AiPlayingStyle} onChange={onAiStyle} placeholder='AI PLAYING STYLES'/>
    </Box>

  <input style={{marginTop:"20px"}} type={'number'} sx={{mt:5}}  fullWidth onChange={(e)=>{PossessionGameSet(e.target.value)}} id='GoalPoacher' defaultValue={singlePlayer.PossessionGame} color={'secondary'} placeholder="Possession Game" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{QuickCounterSet(e.target.value)}} id='QuickCounter' defaultValue={singlePlayer.QuickCounter} color={'secondary'} placeholder="QUICK COUNTER" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{LongBallCounterSet(e.target.value)}} id='LongBallCounter' defaultValue={singlePlayer.LongBallCounter} color={'secondary'} placeholder="LONG BALL COUNTER" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{OutWideSet(e.target.value)}} id='OutWide' defaultValue={singlePlayer.OutWide} color={'secondary'} placeholder="OUT WIDE" variant="outlined" />

  <input style={{marginTop:"20px"}} type={'number'} fullWidth onChange={(e)=>{LongBallSet(e.target.value)}} id='LongBall' defaultValue={singlePlayer.LongBall} color={'secondary'} placeholder="LONG BALL" variant="outlined" />

  <Button sx={{mt:5}}fullWidth variant='contained'onClick={onSubmit} >Update</Button>


    </Container>  
    {/* { dis===true && <CloneBasic AdvanceCloneValues={AdvanceCloneValues} />} */}
    </>
  ) 
}

export default CloneAdvance 
