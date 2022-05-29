import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems, getMenuTypes } from '../../http';
import { setAdminAddTypeAction, setAdminChangeTypeAction } from '../../store/adminAddingStore';
import './adminMenuList.scss'

const AdminMenuList = () => {
  const [types, setTypes] = useState([])
  const [menu, setMenu] = useState([])

  const addingStatus = useSelector(state => state.adminAddingReducer.status)

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchMenu() {
      const fetchedTypes = await getMenuTypes()
      const fetchedMenu = await getMenuItems()
      console.log('fetch!')
      setTypes(fetchedTypes)
      setMenu(fetchedMenu.rows)
    }
    fetchMenu()
    console.log('status', addingStatus)
  }, [addingStatus])

  useEffect(() => {
    console.log(types)
    // menu.forEach(item => console.log(item.img))
  }, [types, menu])

  const addType = () => {
    dispatch(setAdminAddTypeAction())
  }

  const changeType = (type) => {
    dispatch(setAdminChangeTypeAction(type))
  }

  return (
    <>
      <div className='admin-menu-types'>
        {
          types.map(item => 
            <div key={item.id} className='admin-menu-types__item' onClick={() => changeType({id: item.id, type: item.type, name: item.name})}>
              {item.name}
            </div>
          )
        }
        <button 
          className='admin-menu-types__add'
          onClick={addType}>
          Добавить тип 
        </button>
      </div>
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
    </>
  );
};

export default AdminMenuList;