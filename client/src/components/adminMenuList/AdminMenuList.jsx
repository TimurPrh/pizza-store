import React, { useEffect, useState } from 'react';
import { getMenuItems, getMenuTypes } from '../../http';
import './adminMenuList.scss'

const AdminMenuList = () => {
  const [types, setTypes] = useState([])
  const [menu, setMenu] = useState([])

  useEffect(() => {
    async function fetchMenu() {
      const fetchedTypes =  await getMenuTypes()
      const fetchedMenu =  await getMenuItems()
      setTypes(fetchedTypes)
      setMenu(fetchedMenu.rows)
    }
    fetchMenu()
  }, [])

  useEffect(() => {
    console.log(types)
    // menu.forEach(item => console.log(item.img))
  }, [types, menu])

  return (
    <div className='admin-menu-list'>
      {
        menu.map(item => 
          <div className='admin-menu-item' key={item.id}>
            <div className='admin-menu-item__top'>
              <div className='admin-menu-item__img'>
                <img src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
              </div>
              <div className='admin-menu-item__text'>
                <div className='admin-menu-item__name'>
                  {item.name}
                </div>
                <div className='admin-menu-item__description'>
                  {item.description}
                </div>
              </div>
            </div>
            <div className='admin-menu-item__bottom'>
              <div className='admin-menu-item__price'>
                {item.price} ₽
              </div>
            </div>
          </div> 
        )
      }
    </div>
  );
};

export default AdminMenuList;