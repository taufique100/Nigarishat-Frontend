import React, { useContext } from 'react'
import StoreCotext from '../../Component/ContextAPI/StoreContext'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './ViewAllBook.css'
import { LiaAngleLeftSolid } from 'react-icons/lia';

export default function ViewAllBook() {

    const {viewAllModalShow, setViewAllModalShow} = useContext(StoreCotext);
    const handleClose = ()=>{
        setViewAllModalShow(false)
    }

    return (
        <>
            <Offcanvas className='viewDetails_container' placement='end' show={viewAllModalShow} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title onClick={handleClose} className='d-flex align-items-center offcanva_title'><LiaAngleLeftSolid fontSize={25}/> Best Seller</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
