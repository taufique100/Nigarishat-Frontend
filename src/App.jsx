import react from 'react'
import StoreContextProvider from './Component/ContextAPI/StoreContextProvider'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import ViewAllBook from './Pages/ViewAllBook/ViewAllBook'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Home from './Pages/Home/Home'
import Order from './Pages/Ordered/Order'
import AddToCard from './Pages/AddToCard/AddToCard'
import './App.css'

function App() {

  return (
    <>
      <StoreContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to={'home'} />} />
          <Route path="/" element={<Layout />} >
            <Route path="home" element={<Home />} />
            <Route path="home/view-all" element={<ViewAllBook />} />
            <Route path="home/place-order" element={<PlaceOrder />} />
            <Route path="order" element={<Order />} />
            <Route path="add-to-card" element={<AddToCard />} />
          </Route>
        </Routes>
      </StoreContextProvider>
    </>
  )
}

export default App
