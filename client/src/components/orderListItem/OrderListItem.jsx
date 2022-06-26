import './orderListItem.scss'

const OrderListItem = ({order}) => {

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

      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{price}</td>
          <td>{count}</td>
        </tr>
      )
    }

    return (
      <table>
        <tbody>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Количество</th>
          </tr>
          {cartArray.map(item => 
            parseCartString(item)
          )}
        </tbody>
      </table>
    )
  }

  return (
    <tr className='order-list-item'>
      <td>{order.createdAt && getFormattedDate(order.createdAt)}</td>
      <td>{order.name}</td>
      <td>{order.phone}</td>
      <td>{order.comment}</td>
      <td>{order.cart && getFormattedCart(order.cart)}</td>
      <td>{getSum()}</td>
      <td>{order.done}</td>
    </tr>
  )
}

export default OrderListItem;