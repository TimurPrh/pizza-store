import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './header.scss'

const Header = ({main}) => {
  const [activeType, setActiveType] = useState()
  const [headerOffset, setHeaderOffset] = useState(100)
  const {types} = useSelector(state => state.menuReducer)
  const {sum} = useSelector(state => state.cartReducer)
  const {y, anchors} = useSelector(state => state.positionReducer)
  const location = useLocation()

  const mobileLinks = useRef([]);
  const linksWrapper = useRef(null)

  useEffect(() => {
    mobileLinks.current = mobileLinks.current.slice(0, types.length);
  }, [types]);

  useEffect(() => {
    if (mobileLinks.current.length > 0) {
      if (activeType) {
        const offset = linksWrapper.current.querySelector('.active-type').offsetLeft
        const linkWidth = linksWrapper.current.querySelector('.active-type').offsetWidth / 2
        const width = linksWrapper.current.clientWidth / 2
        console.log('scroll to', offset - width + linkWidth);
        linksWrapper.current.scrollTo({ left: offset - width + linkWidth, behavior: 'smooth' });
        // console.log('scroll 100');
        // linksWrapper.current.scrollTo({ left: 100, behavior: 'smooth' });
      }
    }
  }, [activeType])

  useEffect(() => {
    let noActive = true

    anchors.forEach(anchor => {
      if ((anchor.y - headerOffset * 2) < y && (anchor.y + anchor.height - headerOffset ) > y ) {
        setActiveType(anchor.id)
        noActive = false
      }
    })

    if (noActive) {
      setActiveType()
    }
  }, [y])

  useEffect(()=> {
    // scroll to anchor, if location changed
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({top: offsetPosition, behavior: 'smooth'})
      }
    } else {
      window.scrollTo({top:0,left:0, behavior: 'smooth'})
    }
  }, [location])

  useEffect(() => {
    if (window.innerWidth > 768) {
      setHeaderOffset(60)
    }

    const handleMinWidth = e => {
      if (e.matches) {
        setHeaderOffset(100)
      } else {
        setHeaderOffset(60)
      }
    };
    window.matchMedia("(max-width: 768px)").addEventListener('change', handleMinWidth);

    return () => window.removeEventListener('scroll', handleMinWidth)
  }, [])

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
            <div className='header__menu-links header__menu-links_desktop'>
              {main && types.map(type => 
                <Link key={type.id} to={`/#type_${type.id}`} className={activeType === type.id ? 'active-type' : null}>{type.name}</Link>
              )}
            </div>
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
      { main && 
        <nav className='header__links header__menu-links header__menu-links_mobile'>
          <div className="container" ref={linksWrapper}>
            {types.map((type, i) => 
              <Link
                key={type.id} 
                to={`/#type_${type.id}`}
                ref={el => mobileLinks.current[type.id] = el} 
                className={activeType === type.id ? 'active-type' : null}
                >{type.name}
              </Link>
            )}
          </div>
        </nav>
      }
    </header>
  );
};

export default Header;