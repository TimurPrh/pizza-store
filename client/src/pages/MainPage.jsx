import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import MenuList from '../components/menuList/MenuList';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { getMenuItems, getMenuTypes } from '../http';
import { addMenuAction } from '../store/menuStore';
import { setPositionAction } from '../store/positionStore';

const MainPage = () => {
  const [menu, setMenu] = useState({types: [], menu: []})

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPositionAction(0))
  }, [])

  useEffect(() => {
    const fetchMenu = async () => {
      const allTypes = await getMenuTypes()
      const menu = await getMenuItems() 

      const checkNotEmpty = (type) => {
        const index = menu.rows.findIndex(item => item.typeid === type.id)
        // return typeof menu.rows[index] !== 'undefined'
        return true
      }

      const types = allTypes.filter(type => checkNotEmpty(type))
      
      setMenu({ types, menu: menu.rows })
    }

    fetchMenu()
  }, [])

  useEffect(() => {
    dispatch(addMenuAction(menu))
  }, [menu])

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