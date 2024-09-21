import React, { useRef } from 'react';
import nigarishatLogo from '../../assets/nigarishatLogo.jpeg'
import { FaRegUser } from "react-icons/fa6";
import { GoSearch } from 'react-icons/go';
import './Navbar.css';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()
  const inputref = useRef(null)

  const handleFocusInput=()=>{
    inputref.current.focus();
  }


  return (
    <nav className='navbar m-0 p-0'>
      <div className='navbar-content d-flex align-items-center justify-content-between gap-2 '>
        <img onClick={()=>navigate('/')} src={nigarishatLogo} alt="user" className='navbar-logo' />
        <div onClick={handleFocusInput} className='filter-input d-none d-sm-block d-flex align-items-center justify-content-between gap-2'>
          <GoSearch fontSize={16}/>
          <input 
            ref={inputref}
            placeholder='Search'
            type="text" />
        </div>
        <div className="icons-groups d-flex align-items-center justify-content-start gap-2">
          <div className="icons-wrapper"><FaRegUser fontSize={20}/></div>
          <div className="icons-wrapper"><CiHeart fontSize={24}/></div>
          <div className="icons-wrapper"><MdOutlineShoppingCart fontSize={20}/></div>
        </div>
      </div>
      <div onClick={handleFocusInput} className='filter-input d-block d-sm-none w-100 mx-3 d-flex align-items-center justify-content-between gap-2'>
          <GoSearch fontSize={16}/>
          <input 
            ref={inputref}
            placeholder='Search'
            type="text" />
        </div>
    </nav>
  );
}
