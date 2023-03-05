import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SinglePlayerCard from '../SinglePlayerCard'
import { makeStyles } from '@mui/styles';
import Footer from '../../Footer/Footer';



const useStyles = makeStyles({

    root:{
      background: "linear-gradient(90deg, rgba(31,206,219,1) 0%, rgba(203,36,166,1) 44%, rgba(186,37,73,1) 80%, rgba(196,190,56,1) 100%);"
    },
    dribiling:{
      background: "linear-gradient(90deg, rgba(36,45,203,1) 13%, rgba(166,13,255,1) 86%);"
    },
    passing:{
      background:" linear-gradient(90deg, rgba(60,185,139,1) 39%, rgba(67,148,105,1) 76%);"
    },
    physicaly:{
      background: "linear-gradient(90deg, rgba(231,169,82,1) 10%, rgba(222,87,201,1) 53%, rgba(81,51,193,1) 96%);"
    },
    defending:{
      background: "linear-gradient(90deg, rgba(11,28,147,1) 22%, rgba(76,42,246,1) 56%);"
    },
    gk:{
      background: "linear-gradient(90deg, rgba(226,141,120,1) 18%, rgba(219,37,11,1) 37%, rgba(103,13,13,1) 58%);"
    },
    playerD:{
      background: "linear-gradient(90deg, rgba(81,96,241,1) 30%, rgba(183,8,201,1) 97%);"
    },
    skills:{
      background: "linear-gradient(90deg, rgba(60,217,228,1) 0%, rgba(143,34,164,1) 36%, rgba(241,75,92,1) 79%, rgba(205,212,32,1) 100%);"
    },
   charactics:{
    background: "linear-gradient(90deg, rgba(73,72,167,1) 0%, rgba(172,67,77,1) 49%, rgba(186,60,228,1) 92%);" 
  },
   ai:{
    background: "linear-gradient(90deg, rgba(65,55,56,1) 5%, rgba(125,125,144,1) 52%, rgba(108,65,79,1) 93%);"
   },
   teamPlay:{
    background: "linear-gradient(90deg, rgba(7,7,194,1) 18%, rgba(125,58,166,1) 65%);"
   },
   alltypo:{
    textTransform:'uppercase'
   }
      
    })


const SinglePlayerMd = ({updatePlayer,open,skills,aiStyle}) => {
    const classes = useStyles()

    const [zeroth, setZeroth] = useState('')
    const [ai, setAi] = useState('')
    
      useEffect(()=>{
        if(skills===undefined)
        setZeroth(['null']);
        else
        setZeroth(skills);
      })
      
      useEffect(()=>{
        if(aiStyle===undefined)
        setAi(['null']);
        else
        setAi(aiStyle);
      })

      var playerLength = ''
  playerLength = (`${updatePlayer.Fullname}`.length);

  var TeamLength = ''
  TeamLength = (`${updatePlayer.Team}`.length);

  var teamLength = ''
  teamLength = (`${updatePlayer.FullNamePosition}`.length);

  var NationalityLength = ''
  NationalityLength = (`${updatePlayer.Nationality}`.length);

  var LeagueLength = ''
  LeagueLength = (`${updatePlayer.League}`.length);
  
  var footUsageLength = ''
  footUsageLength = (`${updatePlayer.footUsage}`.length);
  
  var footAccLength = ''
  footAccLength = (`${updatePlayer.footAcc}`.length);
  
  var FormLength = ''
  FormLength = (`${updatePlayer.form}`.length);
  
  var InjuryResistanceLength = ''
  InjuryResistanceLength = (`${updatePlayer.injury}`.length);


  return (
    <>
      <Container sx={{display:'flex',justifyContent:'center'}}>
      <Box width={'80%'} position={'relative'} sx={{boxShadow:3}} height={'5000px'}  bgcolor={'white'} mt={10} > 
       <Typography position={'relative'} top={30} left={30} fontFamily={'Bebas Neue ,sans-serif'} fontSize={55} fontWeight={100}>{updatePlayer.Name}</Typography>
     <Box mt={4} display={'flex'} justifyContent={'center'}>
     <SinglePlayerCard/>
     </Box>

    <Container maxWidth={"sm"}>
    <Box  className={classes.root}  mt={5} borderRadius={'5px'} height={'45px'} display='flex' justifyContent={'center'}  >
        <Typography mt={1.3}  fontWeight={'100'} fontSize={'18px'} color='white' fontFamily={'Prompt ,sans-serif'} >ATTACKING</Typography>
    </Box>

    <Box border={'solid 1px #F2E6E7'} mt={5}>
            <Box bgcolor={'#E3DFED'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1.3} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >OFFENSIVE AWARENESS </Typography>
              <Typography left={550} mt={1.3} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.OffensiveA}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1.3} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >FINISHING</Typography>
              <Typography left={550} mt={1.3} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Finishing}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} display='flex' >
              <Typography left={180} mt={1.3} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >KICKING POWER</Typography>
              <Typography left={550} mt={1.3} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.KinkingPower}</Typography>
            </Box>
           </Box>
      <Box mt={5}>
        <hr/>
     </Box>

     <Box className={classes.dribiling} mt={5} borderRadius={'5px'} height={'45px'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'} fontSize={'18px'} fontFamily='Prompt ,sans-serif' >DRIBBLING</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} mt={5}>
            <Box bgcolor={'#E3DFED'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >BALL CONTROL </Typography>
              <Typography left={550} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.BallControl}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >DRIBBLING</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Dribbling}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >TIGHT POSSESSION</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.TightPossession}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >BALANCE</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Balance}</Typography>
            </Box>
            </Box>

    <Box mt={5}>
        <hr/>
    </Box>  

    <Box className={classes.passing}  mt={5} borderRadius={'5px'} height={'45px'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif' >PASSING</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} mt={5}>
            <Box bgcolor={'#E3DFED'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >LOW PASS </Typography>
              <Typography left={550} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.LowPass}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >LOFTED PASS</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.LowPass}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >SET PIECE TAKING</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.SetPieceTaking}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >CURL</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Curl}</Typography>
            </Box>
            </Box>

    <Box mt={5}>
        <hr/>
    </Box> 

    <Box className={classes.physicaly} mt={5} borderRadius={'5px'} height={'45px'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif' >PHYSICALITY</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} mt={5}>
            <Box bgcolor={'#E3DFED'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >SPEED </Typography>
              <Typography left={550} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Speed}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >ACCELERATION</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Acceleration}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >PHYSICAL CONTACT</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.PhysicalContact}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >STAMINA</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Stamina}</Typography>
            </Box>
            </Box>

    <Box mt={5}>
        <hr/>
    </Box> 

    <Box className={classes.defending} mt={5} borderRadius={'5px'} height={'45px'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif' >DEFENDING</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} mt={5}>
            <Box bgcolor={'#E3DFED'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >HEADING</Typography>
              <Typography left={550} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Heading}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >JUMPING</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Jumping}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >DEFENSIVE AWARENESS</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.DeffensiveAwareness}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >TACKLING</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Tackling}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >DEFENSIVE ENGAGEMENT</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.DefensiveEngagement}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >AGGRESSION</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Aggression}</Typography>
            </Box>
            </Box>

    <Box mt={5}>
        <hr/>
    </Box> 
      
    <Box className={classes.gk}borderRadius={'5px'} height={'45px'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif ' >GOALKEEPING</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} mt={5}>
            <Box bgcolor={'#E3DFED'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >GK AWARENESS</Typography>
              <Typography left={550} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.GkAwareness}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >GK CATCHING</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.GkCatching}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >GK PARRYING</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.GkParrying}</Typography>
            </Box>
            <Box  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >GK REFLEXES</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.GkReflexes}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >GK REACH</Typography>
              <Typography left={550} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.GkReach}</Typography>
            </Box>
            </Box>

    <Box mt={5}>
        <hr/>
    </Box> 

    <Box className={classes.playerD} mt={5} borderRadius={'5px'} height={'45px'} width={'550px'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif ' >PLAYER DETAILES</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} width={'550px'} mt={5}>
            <Box bgcolor={'#E3DFED'} width={'100%'} height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >NAME</Typography>
              <Typography left={playerLength < 8 ? 470 : playerLength <=10 ? 780 : playerLength <=15 ? 470: playerLength <= 25 && 400} mt={1} position='absolute' className={classes.alltypo} fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Fullname}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >NATIONALITY</Typography>
              <Typography left={NationalityLength < 8 ? 490 : NationalityLength <=10 ? 480 : NationalityLength <=15 ? 470: NationalityLength <= 25 && 400} mt={1} position='absolute' className={classes.alltypo}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Nationality}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >TEAM</Typography>
              <Typography left={TeamLength < 8 ? 550 : TeamLength <=10 ? 480 : TeamLength <=15 ? 470: TeamLength <= 25 && 400} mt={1} position='absolute' className={classes.alltypo} fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Team}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >LEAGUE</Typography>
              <Typography left={LeagueLength < 8 ? 485 : LeagueLength <=10 ? 480 : LeagueLength <=15 ? 470: LeagueLength <= 25 && 400} mt={1} position='absolute' className={classes.alltypo} fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.League}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >POSITION</Typography>
              <Typography left={teamLength < 8 ? 700 : teamLength <=10 ? 480 : teamLength <=15 ? 475: teamLength <= 25 && 465} mt={1} position='absolute' className={classes.alltypo} fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.FullNamePosition}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >AGE</Typography>
              <Typography left={500} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Age}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >STRONGER FOOT</Typography>
              <Typography left={500} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{updatePlayer.foot}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >HEIGHT (CM)</Typography>
              <Typography left={500} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Height}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >WEIGHT</Typography>
              <Typography left={500} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Weight}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' >
              <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >PRICE</Typography>
              <Typography left={500} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.Price}</Typography>
            </Box>
            </Box>

    <Box mt={5}>
        <hr/>
    </Box>

    <Box className={classes.skills} mt={5} borderRadius={'5px'} height={'45px'} width={'100%'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif ' >SKILLS</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} width={'100%'} mt={5}>
            <Box bgcolor={'#E3DFED'} width={'100%'} height={'45px'} display='flex' justifyContent={'center'}>
              <Typography mt={1} fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[0]}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex'justifyContent={'center'} >
              <Typography  mt={1}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo}  >{zeroth[1]}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' justifyContent={'center'} >
              <Typography mt={1} fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[2]}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[3]}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' justifyContent={'center'} >
              <Typography  mt={1} fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[4]}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' justifyContent={'center'}>
              <Typography mt={1}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[5]}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' justifyContent={'center'} >
              <Typography  mt={1}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[6]}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' justifyContent={'center'}>
              <Typography  mt={1}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[7]}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' justifyContent={'center'} >
              <Typography mt={1} fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[8]}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' justifyContent={'center'}>
              <Typography  mt={1}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{zeroth[9]}</Typography>
            </Box>
            </Box>


   <Box mt={5}>
        <hr/>
   </Box>   

   <Box className={classes.passing} mt={5} borderRadius={'5px'} height={'45px'} width={'100%'} display='flex' justifyContent={'center'}  >
          <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif ' >PLAYING STYLE</Typography>
      </Box>
            <Box border={'solid 1px #F2E6E7'} width={'100%'} mt={5}>
            <Box bgcolor={'#E3DFED'} width={'100%'} height={'45px'} display='flex' justifyContent={'center'}>
              <Typography mt={1} fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{updatePlayer.selectedPlayingStyle}</Typography>
            </Box>
        </Box>

<Box mt={5}>
   <hr/>
</Box>

<Box className={classes.charactics} mt={5} borderRadius={'5px'} height={'45px'} width={'100%'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif ' >CHARACTERISTICS</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} width={'100%'} mt={5}>
            <Box bgcolor={'#E3DFED'} width={'100%'} height={'45px'} display='flex' justifyContent={'center'}>
            <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >WEAKFOOT USAGE</Typography>
            <Typography left={footUsageLength === 12 ? 450 : footUsageLength === 6 ? 490 : footUsageLength === 4 ? 500: 470} mt={1} position='absolute'  fontWeight={'200'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{updatePlayer.footUsage}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex'justifyContent={'center'} >
            <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >WEAK FOOT</Typography>
            <Typography left={footAccLength === 12 ? 450 : footAccLength === 6 ? 490 : footAccLength === 4 ? 500: 470} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{updatePlayer.footAcc}</Typography>            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'}  height={'45px'} display='flex' justifyContent={'center'} >
            <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >FROM</Typography>
            <Typography left={FormLength === 12 ? 430 : FormLength === 8 ? 500 : FormLength === 10 ? 490: 460} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{updatePlayer.form}</Typography>            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex' justifyContent={'center'}  >
            <Typography left={180} mt={1} position='absolute' fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' >INJURY RESISTANCE</Typography>
            <Typography left={InjuryResistanceLength === 3 ? 500 : InjuryResistanceLength ===4 ? 500 : footUsageLength === 6 ? 490: 490} mt={1} position='absolute'  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{updatePlayer.injury}</Typography>            </Box>           
            </Box>

<Box mt={5}>
   <hr/>
</Box>


       <Box className={classes.ai} mt={5} borderRadius={'5px'} height={'45px'} width={'100%'} display='flex' justifyContent={'center'}  >
              <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif ' >AI PLAYING STYLES</Typography>
            </Box>
            <Box border={'solid 1px #F2E6E7'} width={'100%'} mt={5}>
            <Box bgcolor={'#E3DFED'} width={'100%'} height={'45px'} display='flex' justifyContent={'center'}>
              <Typography mt={1} fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{ai[0]}</Typography>
            </Box>
            <Box  height={'45px'} width={'100%'}  display='flex'justifyContent={'center'} >
              <Typography  mt={1}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{ai[1]}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} height={'45px'} width={'100%'}  display='flex'justifyContent={'center'} >
              <Typography  mt={1}  fontWeight={'100'} fontSize={'18px'} fontFamily='Varela Round' className={classes.alltypo} >{ai[2]}</Typography>
            </Box>
            </Box>
<Box mt={5}>
   <hr/>
</Box>

<Box className={classes.teamPlay} mt={5} borderRadius={'5px'} height={'45px'} width={'100%'} display='flex' justifyContent={'center'}  >
          <Typography mt={1}  fontWeight={'100'} color={'white'}  fontSize={'18px'} fontFamily='Prompt ,sans-serif ' >TEAM PLAYSTYLE</Typography>
      </Box>
            <Box border={'solid 1px #F2E6E7'} width={'100%'} mt={5}>
            <Box bgcolor={'#E3DFED'} width={'100%'} height={'45px'} display='flex' >
              <Typography left={180} position='absolute' mt={1} fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' >POSSESSION GAME</Typography>
              <Typography left={500} mt={1} position='absolute' fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.PossessionGame}</Typography>
            </Box>
            <Box  width={'100%'} height={'45px'} display='flex' >
              <Typography left={180} position='absolute' mt={1}   fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' >QUICK COUNTER</Typography>
              <Typography left={500} mt={1} position='absolute'  fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.QuickCounter}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'} height={'45px'} display='flex' >
              <Typography left={180} position='absolute' mt={1} fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' >LONG BALL COUNTER</Typography>
              <Typography left={500} mt={1} position='absolute' fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.LongBallCounter}</Typography>
            </Box>
            <Box  width={'100%'} height={'45px'} display='flex' >
              <Typography left={180} position='absolute' mt={1}   fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' >OUT WIDE</Typography>
              <Typography left={500} mt={1} position='absolute'  fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.OutWide}</Typography>
            </Box>
            <Box bgcolor={'#E3DFED'} width={'100%'} height={'45px'} display='flex' >
              <Typography left={180} position='absolute' mt={1} fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' >LONG BALL</Typography>
              <Typography left={500} mt={1} position='absolute' fontWeight={'100'}  fontSize={'18px'} fontFamily='Varela Round' >{updatePlayer.LongBall}</Typography>
            </Box>
        </Box>
    </Container>
    </Box>
      </Container>
    <Footer/>
    </>
  )
}

export default SinglePlayerMd
