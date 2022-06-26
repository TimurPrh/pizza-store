import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems, getMenuTypes } from '../../http';
import AdminMenuContent from '../adminMenuContent/AdminMenuContent';
import AdminMenuTypes from '../adminMenuTypes/AdminMenuTypes';
import OrdersList from '../ordersList/OrdersList';
import './adminContent.scss'

const AdminContent = () => {
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
  }, [addingStatus])

  useEffect(() => {
    setUsedTypes(getUsedTypes())
  }, [menu, types])

  return (
    <div className='admin-content'>
      <h2 className="admin-content__header">Заказы</h2>
      <OrdersList />
      <h2 className="admin-content__header">Типы</h2>
      <AdminMenuTypes types={types}/>
      <h2 className="admin-content__header">Меню</h2>
      <AdminMenuContent menu={menu} types={types} usedTypes={usedTypes}/>
    </div>
  );
};

export default AdminContent;