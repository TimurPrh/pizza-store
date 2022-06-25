import React from 'react';
import { useSelector } from 'react-redux';
import MenuGroup from '../menuGroup/MenuGroup';
import './menuList.scss'

const MenuList = () => {
  const {menu, types} = useSelector(state => state.menuReducer)
  
  return (
    <section className='menu-list'>
      <div className='menu-list__header'>
        Наше меню
      </div>
      <div className='menu-list__content'>
        <div className='menu-list__menu-group'>
          {types.map(type => 
            <MenuGroup key={type.id} type={type} items={menu.filter(item => item.typeid === type.id)}/>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuList;