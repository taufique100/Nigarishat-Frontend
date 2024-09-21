import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import nigarishatLogo from '../../assets/nigarishatLogo.jpeg';
import { FaRegUser } from "react-icons/fa6";
import { GoSearch } from 'react-icons/go';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <nav className='navbar m-0 p-0'>
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
        <div className="icons-groups d-flex align-items-center justify-content-start gap-2">
          <div className="icons-wrapper" onClick={() => navigate('/profile')} aria-label="User Profile">
            <FaRegUser fontSize={20} />
          </div>
          <div className="icons-wrapper" onClick={() => navigate('/favorites')} aria-label="Favorites">
            <CiHeart fontSize={24} />
          </div>
          <div className="icons-wrapper" onClick={() => navigate('/cart')} aria-label="Shopping Cart">
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
    </nav>
  );
}
