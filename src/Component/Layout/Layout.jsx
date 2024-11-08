import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <div className="layout">
        <NavBar />
        <div className='outlet_container'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
