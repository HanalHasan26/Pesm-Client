import React from 'react'
import Rating from "./Rating"
function AdminStar({star}) {
  console.log(star);
  return (
    <>
    <Rating value={star}/>
    </>
  )
}


export default AdminStar



