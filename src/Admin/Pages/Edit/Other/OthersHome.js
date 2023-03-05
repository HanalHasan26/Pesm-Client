import { Box} from '@mui/material'
import React from 'react'
import AdminNavBar from '../../../Components/NavBar/AdminNavBar'
import  { TrendingClone } from './Trending/AdminTrending'
const OthersHome = () => {
  return (
    <>
    <AdminNavBar/>
    <Box mt={5}>   
    <TrendingClone/>

    </Box>
    </>
  )
}

export default OthersHome
