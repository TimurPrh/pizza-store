import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import MainContent from '../components/mainContent/MainContent';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { getMenuItems, getMenuTypes } from '../http';
import { addMenuAction, setMenuDoneAction, setMenuErrorAction, setMenuLoadingAction } from '../store/menuStore';
import { setPositionAction } from '../store/positionStore';

const MainPage = () => {
  const [menu, setMenu] = useState({types: [], menu: []})

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPositionAction(0))
  }, [])

  useEffect(() => {
    const fetchMenu = async () => {
      dispatch(setMenuLoadingAction())

      try {
        const checkNotEmpty = (type) => {
          const index = menu.rows.findIndex(item => item.typeid === type.id)
          // return typeof menu.rows[index] !== 'undefined'
          return true
        }
        
        const allTypes = await getMenuTypes()
        const menu = await getMenuItems()

        const types = allTypes.filter(type => checkNotEmpty(type))
        
        dispatch(setMenuDoneAction())
        setMenu({ types, menu: menu.rows })
      } catch (e) {
        dispatch(setMenuErrorAction())
        console.log(e)
      }
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
      <div className='container'>
        <MainContent />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;