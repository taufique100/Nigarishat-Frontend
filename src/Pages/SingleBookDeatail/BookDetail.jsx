import React, { useContext } from 'react'
import StoreCotext from '../../Component/ContextAPI/StoreContext'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import './BookDetail.css'

export default function BookDetail() {
  const { viewAllModalShow, setViewAllModalShow, singleBookDetails, setSingleBookDetails } = useContext(StoreCotext)

  const handleClose=()=>{
    setViewAllModalShow(false)
  }

  console.log('singleBookDetails',singleBookDetails)

  return (
    <>
      <Offcanvas className='viewDetails_container' placement='end' show={viewAllModalShow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title onClick={handleClose} className='d-flex align-items-center offcanva_title'><LiaAngleLeftSolid fontSize={25} /> Best Seller</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src={singleBookDetails?.image} alt="image-book" />
          <p>{singleBookDetails?.title}</p> | <span>{singleBookDetails?.author}</span>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
