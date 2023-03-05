import React from 'react'

function getStar(value){

  switch (value){
    case 0:
      return "https://www.linkpicture.com/q/0_65.png"
      
      case 100:
       return "https://www.linkpicture.com/q/100_15.png"
       
       default:
  }
}

function getStars(value){

   switch(parseFloat(value)){
    case 0:
      return [0,0,0,0,0];
    case 1:
      return [100,0,0,0,0];
    case 2:
      return [100,100,0,0,0];
    case 3:
      return [100,100,100,0,0];
    case 4:
      return [100,100,100,100,0];
    case 5:
      return [100,100,100,100,100];
      default:
        return [100,100,100,100,100];

   }
}

function Rating({value}) {
  return (
    <>
        {getStars(value).map((value)=>(
    <img src={getStar(value)} alt="description" style={{width:"10px",height:"10px",color:'black',backgroundColor:'transparent'  }}/>
        ))}
    </>
  )
}

export default Rating