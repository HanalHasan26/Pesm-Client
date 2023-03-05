import React from 'react'
import { Grid } from '@mui/material';
import CardCover from '@mui/joy/CardCover';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {makeStyles} from '@mui/styles'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useNavigate } from 'react-router-dom';

// This code for styling card //

const useStyle = makeStyles({
root: {
  width:'150px',
height:'180px',
cursor:'pointer', 
},
grid:{
marginTop:4,
"&:hover":{
  marginTop:'0px',
 }
},
more:{
  width:'150px',
height:'190px',
cursor:'pointer',
  backgroundColor:'#ebeeef',
  borderRadius:'10px'
}
})
// This code for styling card //

const Skill = () => {
  const navigate = useNavigate()
  const classes = useStyle()
  return (
<Grid container  mt={3}  justifyContent={'center'}>
{/* Each cards in each grid  */}
   <Grid md={2} xs={6} className={classes.grid} >
   <div onClick={()=>{
      navigate("/comingSoon")
   }}>
      <Box className={classes.root}>
       <Card sx={{flexGrow: 1 ,ml:2}} >
        <CardCover>
          <img
            src="https://res.cloudinary.com/dhf2t2ffz/image/upload/v1662455344/samples/20220906_143650_mrmlxn.jpg"
            srcSet="https://res.cloudinary.com/dhf2t2ffz/image/upload/v1662455344/samples/20220906_143650_mrmlxn.jpg"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            MarseilleTurn
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
  </Grid>
   <Grid md={2} xs={6} className={classes.grid} >
   <div onClick={()=>{
      navigate("/comingSoon")
   }}>
      <Box className={classes.root}>
       <Card sx={{ flexGrow: 1 ,ml:2}}>
        <CardCover>
          <img
            src="https://res.cloudinary.com/dhf2t2ffz/image/upload/v1662455342/samples/20220906_143328_btt1ov.jpg"
            srcSet="https://res.cloudinary.com/dhf2t2ffz/image/upload/v1662455342/samples/20220906_143328_btt1ov.jpg"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Chop Turn
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
  </Grid>
   <Grid md={2} xs={6} className={classes.grid} >
   <div onClick={()=>{
      navigate("/comingSoon")
   }}>
      <Box className={classes.root}>
       <Card sx={{ flexGrow: 1 ,ml:2}}>
        <CardCover>
          <img
            src="https://res.cloudinary.com/dhf2t2ffz/image/upload/v1662455893/samples/20220906_144636_xjf9hq.jpg"
            srcSet="https://res.cloudinary.com/dhf2t2ffz/image/upload/v1662455893/samples/20220906_144636_xjf9hq.jpg"
            alt=""
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Double Touch
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
  </Grid>
  <Grid md={2} xs={6} className={classes.grid} >
  <div onClick={()=>{
      navigate("/comingSoon")
   }}>
  <Box className={classes.root}>
       <Card sx={{ flexGrow: 1 ,ml:2}}>
        <CardCover>
          <Box bgcolor={'#ebeeef'} boxShadow={3}>
          <MoreHorizOutlinedIcon fontSize='large'/>
          </Box>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="black"
            mt={{ xs: 12, sm: 18 }}
          >
            More
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
</Grid>
{/* Each cards in each grid  */}
</Grid>

  )
}

export default Skill
