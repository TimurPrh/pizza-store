import React from 'react';
import CartContent from '../components/cartContent/CartContent';
import Header from '../components/header/Header';

const CartPage = () => {

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <CartContent />
      </div>
    </div>
  );
};

export default CartPage;