import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems, getMenuTypes } from '../../http';
import { setAdminContentMenuAction, setAdminContentTypesAction, setAdminContentUsedTypesAction } from '../../store/adminContentStore';
import AdminMenuContent from '../adminMenuContent/AdminMenuContent';
import AdminMenuTypes from '../adminMenuTypes/AdminMenuTypes';
import OrdersList from '../ordersList/OrdersList';
import './adminContent.scss'

const AdminContent = () => {
  const addingStatus = useSelector(state => state.adminAddingReducer.status)
  const { types, menu } = useSelector(state => state.adminContentReducer)

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
      dispatch(setAdminContentTypesAction(fetchedTypes))
      dispatch(setAdminContentMenuAction(fetchedMenu.rows))
    }
    fetchMenu()
  }, [addingStatus])

  useEffect(() => {
    dispatch(setAdminContentUsedTypesAction(getUsedTypes()))
  }, [menu, types])

  return (
    <div className='admin-content'>
      <h2 className="admin-content__header">Заказы</h2>
      <OrdersList />
      <h2 className="admin-content__header">Типы</h2>
      <AdminMenuTypes />
      <h2 className="admin-content__header">Меню</h2>
      <AdminMenuContent />
    </div>
  );
};

export default AdminContent;