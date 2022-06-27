import { useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteOrder, putDone } from '../../http'
import './orderListItem.scss'

const OrderListItem = ({order, fetchOrders}) => {
  const [doneChecked, setDoneChecked] = useState(order.done)

  const { types } = useSelector(state => state.adminContentReducer)

  const handleDoneCheck = async (e) => {
    const checked = e.target.checked ? 1 : 0
    await putDone(order.id, checked)
    fetchOrders()
    
    // if (res.result.changedRows === 1) {
    //   setDoneChecked(checked)
    // }
  }

  const handleDeleteOrder = async () => {
    await deleteOrder(order.id)
    fetchOrders()
  }

  const getValueFromString = (str, search) => {
    const keyLen = search.length + 1
    const startInd = str.indexOf(search)
    let endInd = 0
    endInd = str.slice(startInd + keyLen).search(/[^А-Яа-я \d]/)
  
    if (endInd !== -1) {
      return str.slice(startInd + keyLen, startInd + keyLen + endInd)
    }
    return str.slice(startInd + keyLen)
  }

  const findTypeName = (id) => {
    const len = types.length
    for (let i = 0; i < len; i++) {
      if (types[i].id === parseInt(id)) {
        return types[i].name
      }
    }
    return 'Тип'
  }

  const getSum = () => {
    const cartArray = order.cart.split('},{')

    return cartArray.reduce(
      (previous, current) =>  previous + parseInt(getValueFromString(current, 'price')) * parseInt(getValueFromString(current, 'count')) , 0
    );
  }

  const getFormattedDate = (date) => {
    const dateArray = date.toString().split('T')

    return (
      <>
        <div style={{whiteSpace: 'nowrap'}}>{dateArray[1].split('.')[0]}</div>
        <div style={{whiteSpace: 'nowrap'}}>{dateArray[0]}</div>
      </>
    )
  }

  const getFormattedCart = (cart) => {
    const cartArray = cart.split('},{')

    const parseCartString = (str) => {

      const id = getValueFromString(str, 'id')
      const name = getValueFromString(str, 'name')
      const count = getValueFromString(str, 'count')
      const price = getValueFromString(str, 'price')
      const typeid = getValueFromString(str, 'typeid')
      const type = findTypeName(typeid)

      return (
        <tr key={id} className='order-list-item__cart-tr'>
          <td>{type}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{count}</td>
        </tr>
      )
    }

    return (
      <table className='order-list-item__cart'>
        <tbody>
          <tr>
            <th>Тип</th>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Кол.</th>
          </tr>
          {cartArray.map(item => 
            parseCartString(item)
          )}
        </tbody>
      </table>
    )
  }

  return (
    <tr className={order.done ? 'order-list-item order-list-item_done': 'order-list-item'}>
      <td>{order.createdAt && getFormattedDate(order.createdAt)}</td>
      <td>{order.name}</td>
      <td>{order.phone}</td>
      <td>{order.comment}</td>
      <td>{order.cart && getFormattedCart(order.cart)}</td>
      <td>{getSum()}</td>
      <td style={{position: 'relative'}}>
        <div className="order-list-item__text">Выполнен</div>
        <div className="order-list-item__done">
          <input className="order-list-item__done-input" type='checkbox' checked={order.done} onChange={handleDoneCheck} />
        </div>
        <div className="order-list-item__text">Удалить</div>
        <div className="order-list-item__delete" onClick={handleDeleteOrder}></div>
      </td>
    </tr>
  )
}

export default OrderListItem;