import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      
      <div className='container'>
        <nav className='header__nav'>
          <div className='header__logo'>
            <Link to="/">
              <img src="/assets/icons/pizza-logo.png" alt="logo" />
            </Link>
          </div>
          <div className='header__links'>
            <Link to="/about">О нас</Link>
            <a href="tel:+12345678">1-234-5678</a>
            <div className='header__cart'>
              <Link to="/cart">
                <img src="/assets/icons/cart.svg" alt="cart" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;