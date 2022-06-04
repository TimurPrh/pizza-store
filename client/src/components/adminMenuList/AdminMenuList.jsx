import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems, getMenuTypes } from '../../http';
import { setAdminAddMenuAction, setAdminAddTypeAction, setAdminChangeMenuAction, setAdminChangeTypeAction } from '../../store/adminAddingStore';
import './adminMenuList.scss'

const AdminMenuList = () => {
  const [types, setTypes] = useState([])
  const [menu, setMenu] = useState([])
  const [usedTypes, setUsedTypes] = useState([])

  const addingStatus = useSelector(state => state.adminAddingReducer.status)

  const dispatch = useDispatch()

  const getUsedTypes = () => {
    const usedSet = new Set()
    menu.forEach(item => {
      usedSet.add(types.find(type => type.id === item.typeid))
    })
    return Array.from(usedSet).sort((a, b) => a.id - b.id)
  }

  useEffect(() => {
    async function fetchMenu() {
      const fetchedTypes = await getMenuTypes()
      const fetchedMenu = await getMenuItems()
      setTypes(fetchedTypes)
      setMenu(fetchedMenu.rows)
    }
    fetchMenu()
    console.log('status', addingStatus)
  }, [addingStatus])

  useEffect(() => {
    setUsedTypes(getUsedTypes())
  }, [menu, types])

  useEffect(() => {
    console.log('used types')
    console.log(usedTypes)
  }, [usedTypes])

  const addType = () => {
    dispatch(setAdminAddTypeAction())
  }

  const changeType = (type) => {
    dispatch(setAdminChangeTypeAction(type))
  }

  const addMenu = () => {
    dispatch(setAdminAddMenuAction({availableTypes: types}))
  }

  const changeMenu = (menuItem) => {
    dispatch(setAdminChangeMenuAction({menuItem, availableTypes: types}))
  }

  return (
    <>
      <div className='admin-menu-types'>
        {
          types.map(item => 
            <div key={item.id} className='admin-menu-types__item' onClick={() => changeType({...item})}>
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
      <div className='admin-menu-content'>
        {
          usedTypes.map(type => 
            <div className='admin-menu-group' key={type.type}>
              <div className='admin-menu-group__header'>
                {type.name}
              </div>
              <div className='admin-menu-list'>
                {
                  menu.filter(menuItem => menuItem.typeid === type.id).map(item => 
                    <div className='admin-menu-item' key={item.id}  onClick={() => changeMenu({...item})}>
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
            </div>
          )
        }
        <button 
          className='admin-menu-content__add'
          onClick={addMenu}>
          Добавить позицию меню
        </button>
      </div>
    </>
  );
};

export default AdminMenuList;