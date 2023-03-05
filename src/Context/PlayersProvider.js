import axios from 'axios';
import React, {useContext, createContext, useState, useEffect} from 'react'

const PlayerContext = createContext()

const PlayersProvider = ({children}) => {

const [open, setOpen]= useState(false)
const [basicData, setBasicData]= useState([])
const [updatePlayerId, setUpdatePlayerId]= useState('')
const [updatePlayer, setUpdatePlayer]= useState([])
const [singlePlayer,setSinglePlayer] = useState([])
const [pic1,setPic1] = useState('')
const [pic2,setPic2] = useState('')
const [pic3,setPic3] = useState('')
const [star, setStar] = useState()

const [advanceValues, setAdvanceValues] = useState([])
const [selectedSkills,setSelectedSkills] = useState([])
const [selectedPlayingStyle,setSelectedPlayingStyle] = useState('')
const [selectedAiStyle,setSelectedAiStyle] = useState([])


const [skills,setSkills] = useState([])
const [aiStyle,setAistyle] = useState([])

const [name, setNameL] = useState('')
const [nameLength, setNameLength] = useState('')

const fetchPlayers =async ()=>{
  setOpen(true)
  const {data} = await axios.get("https://outrageous-sundress-ant.cyclic.app/api/player");
  setBasicData(data)
  setOpen(false)
}


const accessPlayerData =(_id)=>{
  
  setOpen(true)
  axios.get(`https://outrageous-sundress-ant.cyclic.app/api/newPlayer/singlePlayer/${_id}`).then((res)=>{ 

    setSinglePlayer(res.data)
  }) 
  
 }
//  window.localStorage.setItem("player_id", JSON.stringify(updatePlayerId))


const FetchPlayerData =async()=>{ 
  
  const playerData = await axios.get(`/api/admin/${updatePlayerId}`)
  setUpdatePlayer(playerData.data)
  setNameLength(updatePlayer.Name)
  setNameLength(name.length)
  setSkills(playerData.data.selectedSkills)
  setAistyle(playerData.data.selectedAiStyle)
  setOpen(false)
}




useEffect(()=>{
  fetchPlayers()  
  },[])

  return (
    <PlayerContext.Provider value={{basicData,setBasicData,open,accessPlayerData,
    updatePlayer,FetchPlayerData,updatePlayerId,fetchPlayers,
    updatePlayerId,singlePlayer,setSinglePlayer,pic1,setPic1,pic2,setPic2,pic3,setPic3,
    advanceValues, setAdvanceValues, selectedSkills,setSelectedSkills,selectedPlayingStyle,setSelectedPlayingStyle,
    selectedAiStyle,setSelectedAiStyle,star, setStar,skills,aiStyle,nameLength
    }}>
      {children}
    </PlayerContext.Provider>
  )
};
     
export const PlayerState = () => {
    return useContext(PlayerContext);
  };   

export default PlayersProvider
