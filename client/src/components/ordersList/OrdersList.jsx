import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, getOrdersIds } from '../../http';
import { setPageCountAction } from '../../store/adminContentStore';
import OrderListItem from '../orderListItem/OrderListItem';
import Pagination from '../pagination/Pagination';
import './ordersList.scss'

const OrdersList = () => {

  const [orders, setOrders] = useState([])

  const dispatch = useDispatch()

  const { limit, activePage } = useSelector(state => state.adminContentReducer)

  const fetchOrders = async () => {
    console.group('fetch orders')
    const fetched = await getOrders(limit, activePage)
    const ids = await getOrdersIds()

    dispatch(setPageCountAction(ids.length))

    setOrders(fetched)
    console.log(fetched)
    console.log(ids)
    console.groupEnd()
  }

  useEffect(() => {
    fetchOrders()
  }, [activePage])

  return (
    <div className='orders-list'>
      {
        orders.length > 0 && 
        <table className='orders-table'>
          <tbody>
            <tr>
              <th>Дата</th>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Комментарий</th>
              <th>Заказ</th>
              <th>Цена</th>
              <th>Действие</th>
            </tr>
            {orders.map(order => 
              <OrderListItem key={order.id} order={order} fetchOrders={fetchOrders}/>
            )}
          </tbody>
        </table>
      }
      <div className="orders-list__pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default OrdersList;