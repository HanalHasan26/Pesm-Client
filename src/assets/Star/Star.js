import React from 'react'
import Rating from "./Rating"
function Star({star}) {
  console.log(star+" msd");
  return (
    <>
    <Rating value={star}/>
    </>
  )
}


export default Star



