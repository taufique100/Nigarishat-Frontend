import React from 'react';
import nigarishatLogo from '../../assets/nigarishatLogo.jpeg'

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-content d-flex  align-items-center'>
        <img src={nigarishatLogo} alt="user" className='navbar-logo' />
        <input type="text" />
      </div>
    </nav>
  );
}
