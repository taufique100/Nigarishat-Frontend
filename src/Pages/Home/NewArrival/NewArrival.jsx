import React from 'react'
import './NewArrival.css'
import Bannerarrival from '../../../assets/Banner.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function NewArrival() {
  return (
    <>
        <Carousel className='p-3' showStatus={false} showThumbs={false}>
          <div className="banner_wrapper p-0">
            <img src={Bannerarrival} alt="Bannerarrival" />
            <div className='discount_desc'>
              <p>25% discount</p>
              <p>all Paulo Coelho books!</p>
            </div>
          </div>
          <div className="banner_wrapper">
            <img src={Bannerarrival} alt="Bannerarrival" />
            <div className='discount_desc'>
              <p>25% discount</p>
              <p>all Paulo Coelho books!</p>
            </div>
          </div>
          <div className="banner_wrapper">
            <img src={Bannerarrival} alt="Bannerarrival" />
            <div className='discount_desc'>
              <p>25% discount</p>
              <p>all Paulo Coelho books!</p>
            </div>
          </div>
        </Carousel>
    </>
  )
}
