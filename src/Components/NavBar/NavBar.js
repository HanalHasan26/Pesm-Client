import { AppBar,  Stack, Toolbar, Typography,Button, IconButton, MenuItem, Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{boxShadow:'none'}}>
      <Toolbar >
      <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={()=>navigate("/")}>
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none',
          }}
        >
          PESM DATABASE
        </Typography>
        </Button>
        <Stack direction='row' sx={{marginLeft:'auto',display: { md : 'flex', xs:'none'}}} spacing={2}  >
          <Button color='inherit' onClick={()=>{
            navigate("/")
          }}>HOME</Button>
          <Button color='inherit'
          onClick={()=>{
            navigate("/allplayers")
            }} 
          >PLAYERS</Button>
          <Button color='inherit'
           onClick={()=>{
            navigate("/comingSoon")
          }}>MANAGERS</Button>
          <Button color='inherit'
           onClick={()=>{
            navigate("/comingSoon")
          }}>SKILL</Button>
          <Button onClick={()=>{
          navigate("/allplayers")
          }} color='inherit'><SearchOutlinedIcon/></Button> 
        </Stack>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ ml:'auto', display:{md:'none', xs:'block'} }}
            
          >
            <MenuIcon />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'Right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate("/allplayers")
                }} ><Typography fontFamily={'Arial'}>Search</Typography></MenuItem>
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate('/')
                }} sx={{width:{xs:"500px",sm:"800px"}}}><Typography fontFamily={'Arial'}>Home</Typography></MenuItem>
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate('/allplayers')
                }} sx={{width:"500px"}}><Typography fontFamily={'Arial'}>Players</Typography></MenuItem>
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate('/comingSoon')
                }} sx={{width:"500px"}}><Typography fontFamily={'Arial'}>Managers</Typography></MenuItem>
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate('/comingSoon')
                }} sx={{width:"500px"}}><Typography fontFamily={'Arial'}>Skill</Typography></MenuItem>
            </Menu>
      </Toolbar>
  </AppBar>
  )
}

export default NavBar