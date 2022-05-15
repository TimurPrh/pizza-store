import React from 'react';
import { useSelector } from 'react-redux';
import './cartTotal.scss'

const CartTotal = () => {

  const cart = useSelector(state => state.cartReducer.cart)

  const sum = cart.reduce(
    (previous, current) =>  previous + parseInt(current.price) * current.count, 0
  );

  return (
    <div className='cart-total'>
      <div className='cart-total__sum'>
        <div className='cart-total__sum-text'>
          Итого
        </div>
        <div className='cart-total__sum-price'>
          {sum} ₽
        </div>
      </div>
    </div>
  );
};

export default CartTotal;