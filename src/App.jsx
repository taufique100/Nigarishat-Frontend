import react from 'react'
import StoreContextProvider from './Component/ContextAPI/StoreContextProvider'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Pages/Home/Home'
import './App.css'

function App() {

  return (
    <>
      <StoreContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to={'home'} />} />
          <Route path="/" element={<Layout />} >
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </StoreContextProvider>
    </>
  )
}

export default App
