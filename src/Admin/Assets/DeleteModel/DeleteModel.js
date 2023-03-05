import { Alert, Button, IconButton, Modal, Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const DeleteModel = ({open,handleClose,singlePlayer,setOpen}) => {

  const [alertOpen, setAlertOpen] = useState(false);


  handleClose=() =>{
setOpen(false)
  }

  const deletePlayer =() =>{
      const _id = singlePlayer._id
    axios.put('/api/admin/remove',{_id})
    setAlertOpen(true)
  }

    useEffect(()=>{

    })

  return (
    <>


{alertOpen &&
<Stack sx={{ width: '100%' }}>
   <Alert action={
    <IconButton
    aria-label="close"
    color="inherit"
    size="small"
    onClick={() => {
      setAlertOpen(false);
    }
  }
  ><CloseIcon fontSize="inherit" /></IconButton>
   } variant="filled" severity="success">
      Player Deleted!
   </Alert>
</Stack>}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography fontFamily={'sans-serif'} fontWeight={600} id="modal-modal-description" variant="h6" component="h2">
          {singlePlayer.Name}
          </Typography>
          <Typography fontFamily={'sans-serif'}  id="modal-modal-title" sx={{ mt: 2 }}>
          Are You Wan to Delete This Player
          </Typography>
          <Button onClick={()=>{
              deletePlayer()
              handleClose()
          }} sx={{fontWeight:500, color:'black'}}>YES</Button> 
          <Button onClick={handleClose} sx={{fontWeight:500,color:'black'}}>NO</Button>
        </Box>
      </Modal>
    </>
  )
}

export default DeleteModel
