import React from 'react'
import './NewArrival.css'
import Bannerarrival from '../../../assets/Banner.png'

export default function NewArrival() {
  return (
    <>
        <div className="banner_wrapper">
            <img src={Bannerarrival} alt="Bannerarrival" />
            <div className='discount_desc'>
                <p>25% discount</p>
                <p>all Paulo Coelho books!</p>
            </div>
        </div>
    </>
  )
}
