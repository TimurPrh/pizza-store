import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, removeItemAction } from '../../store/cartStore';
import './cartList.scss'

const CartList = () => {

  const cart = useSelector(state => state.cartReducer.cart)

  const dispatch = useDispatch()

  const addItem = (item) => {
    dispatch(addItemAction(item))
  }

  const removeItem = (id) => {
    dispatch(removeItemAction(id))
  }

  return (
    <div className='cart-list'>
      {cart.map(item => 
        <div key={item.id} className='cart-item'>
          <div className='cart-item__img'>
            <img src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
          </div>
          <div className="cart-item__text">
            <div className="cart-item__header">
              <div className='cart-item__header-text'>
                {item.name}
              </div>
              <div className='cart-item__header-price'>
                {item.price} ₽
              </div>
            </div>
            <div className="cart-item__description">
              {item.description}
            </div>
          </div>
          <div className="cart-item__quantity">
            <div className="cart-item__minus"
              onClick={() => removeItem(item.id)}
            ></div>
            <div className="cart-item__count">{item.count}</div>
            <div className="cart-item__plus"
              onClick={() => addItem(item)}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;