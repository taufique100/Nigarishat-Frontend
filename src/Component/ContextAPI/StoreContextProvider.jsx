import React, { useState } from 'react'
import StoreCotext from './StoreContext'

export default function StoreContextProvider({children}) {
    const [viewAllModalShow, setViewAllModalShow] = useState(false)
  return (
    <StoreCotext.Provider value={{
        viewAllModalShow, setViewAllModalShow,
    }}>
        {children}
    </StoreCotext.Provider>
  )
}
