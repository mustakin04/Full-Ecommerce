import React from 'react'
import Language from '../Component/Language'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
         <Language></Language>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default RootLayout