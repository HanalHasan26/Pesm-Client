import React from 'react'
import { Route, Routes } from 'react-router'
import AdminHome from '../Admin/Components/AdminHome'
import Add from '../Admin/Components/Body/Add'
import Test from '../Admin/Components/Test'
import AdminAllPlayers from '../Admin/Pages/Add/AllPlayers/AllPlayers'
import AdminFeaturedPlayers from '../Admin/Pages/Add/FeaturedPlayers/FeaturedPlayers'
import AdminLegendaryPlayers from '../Admin/Pages/Add/LegendaryPlayers/LegendaryPlayers'
import AdminStanderdPlayers from '../Admin/Pages/Add/Standerd.Playersjs/Standerd'
import DeletePlayer from '../Admin/Pages/Edit/Delete/DeletePlayer'
import NewAdd from '../Admin/Pages/Edit/Other/NewAdd/NewAdd'
import OthersHome from '../Admin/Pages/Edit/Other/OthersHome'
import UpdatePlayer from '../Admin/Pages/Edit/Update/UpdatePlayer'
import UpdatePlayerPage from '../Admin/Pages/Edit/Update/UpdatePlayerPage'
import Allplayers from '../Components/Allplayers/AllPlayers'
import ComingSoon from '../Components/Coming Soon/ComingSoon'
import Empty from '../Components/Empty'
import EpicPlayers from '../Components/EpicPlayers/EpicPlayers'
import FeaturedPlayers from '../Components/FeaturedPlayers/FeaturedPlayers'
import AboutUs from '../Components/Footer/FooterDetails/AboutUs'
import ContactUs from '../Components/Footer/FooterDetails/ContactUs'
import PrivacyAndPolicy from '../Components/Footer/FooterDetails/PrivacyAndPolicy'
import LegendaryPlayers from '../Components/LegendaryPlayers/LegendaryPlayers'
import OnePlayer from '../Components/S.player/OnePlayer'
import SinglePlayer from '../Components/SinglePlayer/SinglePlayer'
import StanderdPlayer from '../Components/StanderdPlayers/StanderdPlayer'
import Home from '../Pages/Home'

const PlayerRoutes = () => {
  return (
    <div>
      <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<AdminHome/>}/>
      <Route path="/admin/AdminAllplayers" element={<AdminAllPlayers/>}/>
      <Route path="/admin/LegendaryPlayers" element={<AdminLegendaryPlayers/>}/>
      <Route path="/admin/FeaturedPlayers" element={<AdminFeaturedPlayers/>}/>
      <Route path="/admin/StanderdPlayers" element={<AdminStanderdPlayers/>}/>

      <Route path="/admin/RemovePlayers" element={<DeletePlayer/>}/>
      <Route path="/admin/AddPlayers" element={<Add/>}/>
      <Route path="/admin/UpdatePlayers" element={<UpdatePlayer/>}/>
      <Route path="/admin/Other" element={<OthersHome/>}/> 
      <Route path="/admin/NewAdd" element={<NewAdd/>}/> 

      <Route path="/admin/UpdatePlayers/update" element={<UpdatePlayerPage/>}/>

      <Route path='/em' element={<Empty/>}/>  
 

      <Route path="/allplayers" element={<Allplayers/>}/>
      <Route path="/featured" element={<FeaturedPlayers/>}/>
      <Route path="/legend" element={<LegendaryPlayers/>}/>
      <Route path="/standerd" element={<StanderdPlayer/>}/>
      <Route path="/epic" element={<EpicPlayers/>}/>
      <Route path="/allplayers/player" element={<SinglePlayer/>}/> 
      <Route path="/allplayers/oneplayer" element={<OnePlayer/>}/> 

      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/> 
      <Route path="/privacyAndPolicy" element={<PrivacyAndPolicy/>}/>  
      <Route path="/comingSoon" element={<ComingSoon/>}/>
      <Route path="/test" element={<Test/>}/>
      

      </Routes> 
    </div>
  )
}

export default PlayerRoutes