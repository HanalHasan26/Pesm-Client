import { AppBar,  Stack, Toolbar, Typography,Button, IconButton, MenuItem, Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminNavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="sticky" sx={{bgcolor:'#1A237E',cursor:'pointer'}} >
      <Toolbar >
      <Button disableElevation disableRipple sx={{ml:1, "&.MuiButtonBase-root:hover":{
    bgcolor:'transparent'
  }}} onClick={()=>navigate("/admin")}>
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
          WELCOME ADMIN
        </Typography>
          </Button>
        <Stack direction='row' sx={{marginLeft:'auto',display: { md : 'flex', xs:'none',fontFamily:'monospace',fontWeight:500}}} spacing={2}  >
          <Button onClick={()=>navigate("/admin/AdminAllplayers")} color='inherit'>ALL PLAYERS</Button>
          <Button onClick={()=>navigate("/admin/AddPlayers")} color='inherit'>ADD PLAYERS</Button>
          <Button onClick={()=>navigate("/admin/UpdatePlayers")} color='inherit'>EDIT PLAYERS</Button>
          <Button onClick={()=>navigate("/admin/RemovePlayers")} color='inherit'>DELETE PLAYERS</Button>
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
                  navigate("/admin/AdminAllplayers")
                  }}><Typography fontFamily={'Arial'}>ALL PLAYERS</Typography></MenuItem>
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate("/admin/AddPlayers")
                  }}><Typography fontFamily={'Arial'}>ADD PLAYERS</Typography></MenuItem>
                <MenuItem onClick={()=>{
                  handleCloseNavMenu()
                  navigate("/admin/UpdatePlayers")
                  }}><Typography fontFamily={'Arial'}>EDIT PLAYERS</Typography></MenuItem>
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate("/admin/RemovePlayers")
                  }}><Typography fontFamily={'Arial'}>DELETE PLAYERS</Typography></MenuItem>
            </Menu>
      </Toolbar>
  </AppBar>
  )
}

export default AdminNavBar