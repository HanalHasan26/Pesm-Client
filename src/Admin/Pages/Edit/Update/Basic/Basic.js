import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { PlayerState } from '../../../../../Context/PlayersProvider';
import AdminStar from '../../../../Assets/AdminStar/Star';
import './Basic.css';

const Basic = ({ updatePlayer, FetchPlayerData}) => {
  const { accessPlayerData} = PlayerState();

  var playerLength = ''
  playerLength = (`${updatePlayer.Name}`.length); 


  const navigate = useNavigate()

  var star = ''
  if(updatePlayer.star){
    star = updatePlayer.star
  }else{
    star = "4"
  }

  useEffect(()=>{
    FetchPlayerData()
    },[])

  return (
    <> 
    <div onClick={()=>{
      accessPlayerData(updatePlayer._id)
      navigate("/allplayers/player")
    }}>
      <Box sx={{direction:'revert'}} className='card1'> 
    <div className='number'>{updatePlayer.Rating}</div>
    <div className='position'>{updatePlayer.Position}</div>
    <div style={{backgroundImage:`url(${updatePlayer.teamPic})`}} className='teamLogo'> </div> 
    <div style={{backgroundImage:`url(${updatePlayer.playerDp})`}} className='playerDp'></div> 
    <div className='star'><AdminStar star={star}/></div>  
    <p className={playerLength > 10 ? "pleyerNameLength" : playerLength <= 8 ? "pleyerNameLength1" : playerLength > 8 ?  "pleyerNameLength2" :'pleyerName'}>{updatePlayer.Name}</p>
    <p className='playerBody'>{updatePlayer.Height+`cm`} {updatePlayer.Weight+`kg`} Age:{updatePlayer.Age}</p>
    <div style={{backgroundImage:`url(${updatePlayer.LeaguePic})`}} className='league'></div>
    <p className='Level'>Level</p>
    <p className='LevelCount'>15/15</p>
    <div style={{backgroundImage:`url(${updatePlayer.nationalityPic})`}} className='country'></div>
    <div style={{backgroundImage:`url(${updatePlayer.footPic})`}} className='foot'></div>
    <div className='curve'>
      <h1 className='rating'>{updatePlayer.Form}</h1>
    </div>
    <div style={{backgroundImage:'url("https://www.linkpicture.com/q/Screenshot-2022-06-26-23050911.png")'}} className='eLogo'></div>
    </Box>
    </div>
    </>
  )
}

export default Basic
