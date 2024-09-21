import React from 'react'
import NewArrival from './NewArrival/NewArrival'
import BestSeller from './BestSeller/BestSeller'
import HistoricalBook from './Historical Book/HistoricalBook'

export default function Home() {
  return (
    <>
        <div className="arrival_barnner">
            <NewArrival/>
            <BestSeller/>
            <HistoricalBook/>
        </div>
    </>
  )
}
