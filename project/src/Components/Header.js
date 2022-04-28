import React from 'react';
import logo from '../assets/logo.png';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;