import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMenuItems } from '../../http';
import { clearCartAction } from '../../store/cartStore';
import { resetStatusAction, setDoneAction, setErrorAction, setLoadingAction } from '../../store/orderingStore';
import './cartOrder.scss'

const CartOrder = () => {
  const navigate = useNavigate()

  const cart = useSelector(state => state.cartReducer.cart)
  const dispatch = useDispatch()

  const form = useRef(null)

  let closeTimer

  const order = async (e) => {
    e.preventDefault()

    const formData = new FormData(form.current)
    let jsonObject = {};
    for (const [key, value]  of formData) {
        jsonObject[key] = value;
    }
    jsonObject['order'] = cart

    console.group('order')
    console.log(jsonObject)

    dispatch(setLoadingAction())
    try {
      const res = await getMenuItems()
      if (res) {
        console.log('ok')
        console.log(res)
        dispatch(setDoneAction())
        form.current.reset()
        closeTimer = window.setTimeout(() => {
          dispatch(resetStatusAction())
          dispatch(clearCartAction())
          navigate('/')
        }, 5000)
      }
      
    } catch(e) {
      console.log(e)
      dispatch(setErrorAction())
    }
    console.groupEnd()
  }

  useEffect(() => {
    return () => {
      window.clearTimeout(closeTimer)
    }
  }, [])

  return (
    <form ref={form} className='cart-order'>
      <label className='cart-order__label'>
        <div className='cart-order__label-text'>Ваше имя</div>
        <input className='cart-order__input' name='name' type="text" />
      </label>
      <label className='cart-order__label'>
        <div className='cart-order__label-text'>Номер телефона</div>
        <input className='cart-order__input' name='phone' type="text" />
      </label>
      <label className='cart-order__label'>
        <div className='cart-order__label-text'>Комментарий</div>
        <textarea className='cart-order__textarea' name="comment"></textarea>
      </label>
      <button
        className='cart-order__submit'
        type='submit'
        onClick={order}
      >
        Оформить
      </button>
    </form>
  );
};

export default CartOrder;