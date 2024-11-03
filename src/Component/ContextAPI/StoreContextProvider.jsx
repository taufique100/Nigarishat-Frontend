import React, { useState } from 'react'
import StoreCotext from './StoreContext'

export default function StoreContextProvider({children}) {
    const [viewAllModalShow, setViewAllModalShow] = useState(false);
    const [singleBookDetails, setSingleBookDetails] = useState({})
  return (
    <StoreCotext.Provider value={{
        viewAllModalShow, setViewAllModalShow,
        singleBookDetails, setSingleBookDetails,
    }}>
        {children}
    </StoreCotext.Provider>
  )
}
