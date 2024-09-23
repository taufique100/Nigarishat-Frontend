import React from 'react'
import NewArrival from './NewArrival/NewArrival'
import BestSeller from './BestSeller/BestSeller'
import HistoricalBook from './Historical Book/HistoricalBook'
import BookDetail from '../SingleBookDeatail/BookDetail'

export default function Home() {
  return (
    <>
      <div className="arrival_barnner">
        <BookDetail />
        <NewArrival />
        <BestSeller />
        <HistoricalBook />
      </div>
    </>
  )
}
