import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className='outlet_container'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
