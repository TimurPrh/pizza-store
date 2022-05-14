import React from 'react';
import MenuItem from '../menuItem/MenuItem';
import './menuGroup.scss'

const MenuGroup = ({name, items}) => {
  return (
    <div className='menu-group'>
      <div className='menu-group__header'>
        {name}
      </div>
      <div className='menu-group__list'>
        {items.map(item => 
          <MenuItem key={item.id} item={item}/>  
        )}
      </div>
      
    </div>
  );
};

export default MenuGroup;