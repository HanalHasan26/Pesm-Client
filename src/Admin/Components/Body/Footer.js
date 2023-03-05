import { Box} from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { PlayerState } from '../../../Context/PlayersProvider'

const AdminFooter = () => {
  const {setPic1,setPic2,setPic3,pic1,pic2,pic3}= PlayerState()



  const picOne =(value)=>{
    if(value){
      const data = new FormData();
      data.append("file", value);
      data.append("upload_preset", "PESMDATA")
      data.append("cloud_name","dhf2t2ffz")
      fetch("https://api.cloudinary.com/v1_1/dhf2t2ffz/image/upload",{
          method:'post',
          body:data,
      }).then((res)=> res.json())
      .then(data => {
          setPic1(data.url.toString());

      })
  }
  }
  
  const picTwo =(value)=>{

    if(value){

      const data = new FormData();
      data.append("file", value);
      data.append("upload_preset", "PESMDATA")
      data.append("cloud_name","dhf2t2ffz")
      fetch("https://api.cloudinary.com/v1_1/dhf2t2ffz/image/upload",{
          method:'post',
          body:data,
      }).then((res)=> res.json())
      .then(data => {
          setPic2(data.url.toString());
      })
  }
}
  const picThree =(value)=>{
    if(value){
      const data = new FormData();
      data.append("file", value);
      data.append("upload_preset", "PESMDATA")
      data.append("cloud_name","dhf2t2ffz")
      fetch("https://api.cloudinary.com/v1_1/dhf2t2ffz/image/upload",{
          method:'post',
          body:data,
      }).then((res)=> res.json())
      .then(data => {
          setPic3(data.url.toString());

      })
  }
}


const onSubmint = async()=>{
   axios.put('https://outrageous-sundress-ant.cyclic.app/api/newPlayer/slider',{pic1,pic2,pic3}).then((res)=>{
    console.log(res.data,"data123");
   })
}




  return (
    < >
      <Box  bgcolor={'#303F9F'} p={{md : 1}} mt={5} >
        <Container>
              <Box fontWeight={500}>
                <input placeholder='pic1' onChange={(e)=>{
                    picOne(e.target.files[0])
                }} type={'file'} accept={'image/*'}/>
                  </Box>
                  <Box fontWeight={500}>
                <input placeholder='pic2' onChange={(e)=>{
                  picTwo(e.target.files[0])
                }} type={'file'} accept={'image/*'}/>
                </Box>
                <Box fontWeight={500}>
                <input placeholder='pic3' onChange={(e)=>{
                  picThree(e.target.files[0])
                }} type={'file'} accept={'image/*'}/>
               </Box>
               <Button onClick={onSubmint}>Submit</Button>
               </Container>
 
      </Box>
    </>
  )
}

export default AdminFooter
