import React from 'react'
import Navigation from '../NavigationBar/Navigation'
import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className='min-h-screen w-auto'>
      <Navigation />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout