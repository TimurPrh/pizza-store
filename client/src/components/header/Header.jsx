import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './header.scss'

const Header = ({main}) => {
  const [activeType, setActiveType] = useState()
  const {types} = useSelector(state => state.menuReducer)
  const {sum} = useSelector(state => state.cartReducer)
  const {y, anchors} = useSelector(state => state.positionReducer)
  const location = useLocation()

  useEffect(() => {
    const headerOffset = 60;
    let noActive = true

    anchors.forEach(anchor => {
      if ((anchor.y - headerOffset * 2) < y && (anchor.y + anchor.height - headerOffset) > y ) {
        setActiveType(anchor.id)
        noActive = false
      }
    })

    if (noActive) {
      setActiveType()
    }
  }, [y])

  useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        const headerOffset = 60;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({top: offsetPosition, behavior: 'smooth'})
      }
    } else {
      window.scrollTo({top:0,left:0, behavior: 'smooth'})
    }
  }, [location,])

  return (
    <header className={main ? 'header header_main' : 'header'}>
      
      <div className='container'>
        <nav className='header__nav'>
          <div className='header__logo'>
            <Link to="/">
              <img src="/assets/icons/pizza-logo.png" alt="logo" />
            </Link>
          </div>
          <div className='header__links'>
            {main && types.map(type => 
              <Link key={type.id} to={`/#type_${type.id}`} className={activeType === type.id ? 'active-type' : null}>{type.name}</Link>
            )}
            <Link to="/about">О нас</Link>
            <a href="tel:+12345678">1-234-5678</a>
            <div className='header__cart'>
              <Link to="/cart">
                <img src="/assets/icons/cart.svg" alt="cart" />
              </Link>
              <div className='header__cart-sum'>
                {sum} ₽
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;