import { useState, useEffect } from 'react';
import { getOrders } from '../../http';
import OrderListItem from '../orderListItem/OrderListItem';
import './ordersList.scss'

const OrdersList = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const fetched = await getOrders()

      setOrders(fetched)
    }
    
    fetchOrders()
  }, [])

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
              <th>Выполнен</th>
            </tr>
            {orders.map(order => 
              <OrderListItem key={order.id} order={order} />
            )}
          </tbody>
        </table>
      }
    </div>
  );
};

export default OrdersList;