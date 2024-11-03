import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import nigarishatLogo from '../../assets/nigarishatLogo.jpeg';
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import './Navbar.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [toggleNav, setToggleNav] = useState(false)

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleToggle=()=>{
    setToggleNav(prev=>!prev)
  }
  const handleNavigate=(path)=>{
    navigate(path)
    handleToggle()
  }

  return (
    <>
     {/* <nav className='navbar position-fixed w-100 bg-white top-0 m-0 p-0'>
       <div className='navbar-content d-flex align-items-center justify-content-between gap-2'>
         <img
          onClick={() => navigate('/')}
          src={nigarishatLogo}
          alt="Nigarishat Logo"
          className='navbar-logo'
        />
        <div
          onClick={handleFocusInput}
          className='filter-input d-none d-sm-flex align-items-center justify-content-between gap-2'
        >
          <GoSearch fontSize={16} />
          <input
            ref={inputRef}
            placeholder='Search'
            type="text"
            aria-label="Search"
          />
        </div>
        <div className='nav_items_list'>
          <Link to={'/home'}>Home</Link>
          <Link to={'#'}>About</Link>
          <Link to={'#'}>Contact Us</Link>
        </div>
        <div className="icons-groups d-flex align-items-center justify-content-start gap-2">
          <div className="icons-wrapper" onClick={() => navigate('/profile')} aria-label="User Profile">
            <FaRegUser fontSize={20} />
          </div>
          <div className="icons-wrapper" onClick={() => navigate('/add-to-card')} aria-label="Favorites">
            <CiHeart fontSize={24} />
          </div>
          <div className="icons-wrapper" onClick={() => navigate('/order')} aria-label="Shopping Cart">
            <MdOutlineShoppingCart fontSize={20} />
          </div>
        </div>
      </div>
      <div
        onClick={handleFocusInput}
        className='filter-input d-block d-sm-none w-100 mx-3 d-flex align-items-center justify-content-between gap-2'
      >
        <GoSearch fontSize={16} />
        <input
          ref={inputRef}
          placeholder='Search'
          type="text"
          aria-label="Search Mobile"
        />
      </div>
    </nav> */}
      <Navbar expand="md" expanded={toggleNav} className="bg-body-tertiary py-2 position-fixed w-100 bg-white top-0 m-0 p-0">
        <div className='m-0 w-100 d-flex align-items-center justify-content-between px-4 flex-wrap'>
          <Navbar.Brand className='navbar-Brand_img' href="#home">
            <img
              onClick={() => navigate('/home')}
              src={nigarishatLogo}
              alt="Nigarishat Logo"
              className='navbar-logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex">
            <Nav className="me-md-auto m-auto ">
              <div className='nav_items_list flex-column flex-sm-row align-items-start gap-2 gap-sm-4'>
                <Link to={'/home'}>Home</Link>
                <Link to={'#about'}>About</Link>
                <Link to={'#contact-us'}>Contact Us</Link>
              </div>
            </Nav>
            <div className="icons-groups my-3 d-sm-none d-block d-flex align-items-center justify-content-start gap-2">
              <div className="icons-wrapper" onClick={() => handleNavigate('/profile')} aria-label="User Profile">
                <FaRegUser fontSize={20} />
              </div>
              <div className="icons-wrapper" onClick={() => handleNavigate('/add-to-card')} aria-label="Favorites">
                <CiHeart fontSize={24} />
              </div>
              <div className="icons-wrapper" onClick={() => handleNavigate('/order')} aria-label="Shopping Cart">
                <MdOutlineShoppingCart fontSize={20} />
              </div>
            </div>
          </Navbar.Collapse>
          <div className='d-sm-block d-none'>
            <div className="icons-groups d-flex align-items-center justify-content-start gap-2">
              <div className="icons-wrapper" onClick={() => navigate('/profile')} aria-label="User Profile">
                <FaRegUser fontSize={20} />
              </div>
              <div className="icons-wrapper" onClick={() => navigate('/add-to-card')} aria-label="Favorites">
                <CiHeart fontSize={24} />
              </div>
              <div className="icons-wrapper" onClick={() => navigate('/order')} aria-label="Shopping Cart">
                <MdOutlineShoppingCart fontSize={20} />
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>

  );
}
