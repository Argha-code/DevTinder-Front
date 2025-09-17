import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'  // any children routes of body is render over here
import Footer from './Footer'





const Body = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default Body