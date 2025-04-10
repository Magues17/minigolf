import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import menu_icon from '../../assets/edusity/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    if (mobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenu]);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="nav-inner">
        <img
          src={menu_icon}
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleMenu}
        />

        <ul
          ref={menuRef}
          className={mobileMenu ? 'mobile-menu' : 'mobile-menu hide-mobile-menu'}
        >
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/booking" onClick={toggleMenu}>Reserve Now</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
          <li><Link to="/snowcones" onClick={toggleMenu}>Snow Cones</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="btn">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
