import './sidebar.css';
import React, { useState } from 'react';
import "boxicons/css/boxicons.min.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isMenuOpen ? 'sticky' : ''}`}>
      <a href="/" className="logo">Amare</a>
      <i
        className='bx bx-menu'
        id="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      ></i>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
