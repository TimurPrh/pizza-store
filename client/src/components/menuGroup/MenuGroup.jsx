import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from '../../hooks/useWindowSize';
import { setAnchorAction } from '../../store/positionStore';
import MenuItem from '../menuItem/MenuItem';
import './menuGroup.scss'

const MenuGroup = ({type, items}) => {
  const dispatch = useDispatch()

  const ref = useRef(null)

  const size = useWindowSize()

  useEffect(() => {
    dispatch(setAnchorAction({
      id: type.id,
      y: ref.current.offsetTop,
      height: ref.current.getBoundingClientRect().height
    }))
  }, [ref, size.width])

  return (
    <div className='menu-group' id={`type_${type.id}`}>
      <div className='menu-group__header'>
        {type.name}
      </div>
      <div className='menu-group__list' ref={ref}>
        {items.map(item => 
          <MenuItem key={item.id} item={item}/>  
        )}
      </div>
      
    </div>
  );
};

export default MenuGroup;