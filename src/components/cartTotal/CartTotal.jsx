import React from 'react';
import { useSelector } from 'react-redux';
import './cartTotal.scss'

const CartTotal = () => {

  const {sum} = useSelector(state => state.cartReducer)

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