import React, { useEffect } from 'react'
import { PlayerState } from '../../Context/PlayersProvider';

const Test = () => {

    const { basicData, fetchPlayers} = PlayerState();

    // var basicData = []

    // const fetchPlayers =async ()=>{
    //   const {data} = await axios.get("/api/player");
    //   basicData=(data)
    //   console.log(basicData);
    // }
    
    

const data = [
  {
    name:'pirlo',
    date:"19"
  },
  {
    name:'hanal',
    date:"29"
  },
]
var data1 = data




console.log(basicData);

    useEffect(()=>{ 
      fetchPlayers()
    },[])
    console.log(data1);
  return (
    <>
    {data.map((val,k)=>(
      <p key={k}>{val.name}</p>
    ))}
    </>
  )
}

export default Test
