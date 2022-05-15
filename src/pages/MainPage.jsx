import React from 'react';
import Header from '../components/header/Header';
import MenuList from '../components/menuList/MenuList';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <MenuList />
      </div>
    </>
  );
};

export default MainPage;