import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import MenuList from '../components/menuList/MenuList';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { setPositionAction } from '../store/positionStore';

const MainPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPositionAction(0))
  }, [])

  useScrollPosition(({ prevPos, currPos }) => {
    dispatch(setPositionAction(currPos.y))
  }, [], null, true)

  return (
    <>
      <Header main/>
      <div className='container' onScroll={(e) => console.log('scroll')}>
        <MenuList />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;