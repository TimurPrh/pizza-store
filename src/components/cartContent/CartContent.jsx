import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../cartList/CartList';
import CartOrder from '../cartOrder/CartOrder';
import CartTotal from '../cartTotal/CartTotal';
import Modal from '../modal/Modal';
import './cartContent.scss'

const CartContent = () => {

  const cart = useSelector(state => state.cartReducer.cart)

  const orderStatus = useSelector(state => state.orderingReducer.status)

  return (
    <>
      {
        orderStatus ?
          <Modal type={orderStatus}/>
          :
          null
      }
      <div className='container'>
        {
          cart.length > 0 ?
          <div className='cart-content'>
            <div className="cart-content__left">
              <CartList />
              <CartTotal />
            </div>
            <div className="cart-content__right">
              <CartOrder />
            </div>
          </div>
          :
          <div className='cart-content cart-content_empty'>
            В корзине пусто
          </div>
        }
      </div>
    </>
  );
};



// const Modal = () => {
//   return (
//     <div class="overlay">
//         <div class="modal" id="consultation">
//             <div class="modal__close">&times;</div>
//             <div class="modal__subtitle">Просто заполните форму заявки</div>
//             <div class="modal__desc">и мы перезвоним вам в течении 10 минут</div>
//             <form class="feed-form feed-form_mt25" action="#">
//                 <input name="name" placeholder="Ваше имя" type="text">
//                 <input class="phone-number" name="phone" placeholder="Ваш телефон">
//                 <input name="email" placeholder="Ваш E-mail" type="email">
//                 <button class="button button_submit">заказать консультацию</button>
//             </form>
//         </div>

//         <div class="modal" id="order">
//             <div class="modal__close">&times;</div>
//             <div class="modal__subtitle">Ваш заказ:</div>
//             <div class="modal__desc">Пульсометр Polar FT1</div>
//             <form class="feed-form feed-form_mt25" action="#">
//                 <input name="name" placeholder="Ваше имя" type="text">
//                 <input class="phone-number" name="phone" placeholder="Ваш телефон">
//                 <input name="email" placeholder="Ваш E-mail" type="email">
//                 <button class="button button_submit">Купить</button>
//             </form>
//         </div>

//         <div class="modal" id="thanks">
//             <div class="modal__close">&times;</div>
//             <div class="modal__subtitle">Спасибо за вашу заявку!</div>
//             <div class="modal__desc">Наш менеджер свяжется с вами в ближайшее время!</div>
//         </div>
//         <div class="modal" id="error">
//             <div class="modal__close">&times;</div>
//             <div class="modal__subtitle">Произошла ошибка, Попробуйте позднее!</div>
//             <div class="modal__desc"></div>
//         </div>
//     </div>
//   )
// }

export default CartContent;