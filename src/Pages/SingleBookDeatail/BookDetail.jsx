import React, { useContext } from 'react'
import StoreCotext from '../../Component/ContextAPI/StoreContext'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import './BookDetail.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { MdOutlineShoppingCart } from 'react-icons/md';

export default function BookDetail() {
  const { viewAllModalShow, setViewAllModalShow, singleBookDetails } = useContext(StoreCotext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    setViewAllModalShow(false)
  }

  const handleNavigate = () => {
    navigate('/home/place-order')
    setViewAllModalShow(false)
  }
  console.log('state', state)

  return (
    <>
      <Offcanvas className='viewDetails_container' placement='end' show={viewAllModalShow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title onClick={handleClose} className='d-flex align-items-center offcanva_title'><LiaAngleLeftSolid fontSize={25} />Book Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='slider_conatiner d-flex align-items-start justify-content-between gap-5'>
          <div className='book-details-left_container d-flex flex-column align-items-md-start align-items-column gap-2 justify-content-center'>
            <div className="imageContainer">
              <img src={singleBookDetails?.image} alt="book details" />
            </div>
            <button className='buyNow'> <MdOutlineShoppingCart fontSize={20} /> Add To Card</button>
            <button onClick={handleNavigate} className='addTocard'> <AiOutlineThunderbolt /> Buy Now</button>
            <div className='book-details-btn-group w-100 d-flex flex-column align-items-start gap-2 gap-sm-2'>
            </div>
          </div>
          <div className="right_container_bookDetails">
            <h1>Atomic Habbit</h1>
            <p className='author_name m-0'>Michle Hill</p>
            <div className='price_box'><span className='sale_price'>₹239</span> <span className='original_price'>₹599</span> <span className='disc_percentage'>10% off</span></div>

            <div className="book_summary">
              <h1>Book Summary</h1>
              <p>Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "spice", a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. The story explores the multilayered interactions of politics, religion, ecology, technology, and human emotion, as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.</p>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
