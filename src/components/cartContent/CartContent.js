import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../cartList/CartList';
import CartTotal from '../cartTotal/CartTotal';
import './cartContent.scss'

const CartContent = () => {

  const cart = useSelector(state => state.cartReducer.cart)

  return (
    <>
      {
        cart.length > 0 ?
        <div className='cart-content'>
          <CartList />
          <CartTotal />
        </div>
        :
        <div className='cart-content cart-content_empty'>
          В корзине пусто
        </div>
      }
    </>
  );
};

export default CartContent;