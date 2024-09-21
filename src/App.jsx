import react from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'home'} />} />
        <Route path="/" element={<Layout />} >
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
