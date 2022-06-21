import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import { getMenuItems } from '../../http';
import { clearCartAction } from '../../store/cartStore';
import { resetStatusAction, setDoneAction, setErrorAction, setLoadingAction } from '../../store/orderingStore';
import './cartOrder.scss'
import { useState } from 'react';

const CartOrder = () => {
  const navigate = useNavigate()

  const cart = useSelector(state => state.cartReducer.cart)
  const dispatch = useDispatch()

  const form = useRef(null)

  let closeTimer

  const order = async (jsonObject) => {
    jsonObject.order = cart

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
          console.log('timeout!!!')
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
  }, [cart])

  const phoneNumberMask = [ "+", "7", " ", "(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/ ];
  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

  return (
    <Formik
      initialValues={{ name: "", phone: "", comment: "" }}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={values => {
        order(values)
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string("Введите имя").required("Обязательное поле"),
        phone: Yup.string().required("Обязательное поле").matches(phoneRegExp, 'Невалидный номер'),
        comment: Yup.string()
      })}
    >
      {props => (
          <form ref={form} 
            className='cart-order' 
            onSubmit={props.handleSubmit}
            >
            <label className='cart-order__label'>
              <div className='cart-order__label-text'>Ваше имя</div>
              <input 
                className={
                  props.errors.name && props.touched.name ?
                  'cart-order__input cart-order__input_error'
                  :
                  'cart-order__input' 
                }
                name='name' 
                type="text" 
                value={props.values.name}
                onChange={(e) => {
                  const newErrors = props.errors
                  delete newErrors.name
                  props.setErrors(newErrors)
                  props.handleChange(e)
                }}
                onBlur={props.handleBlur} />
              {props.errors.name && props.touched.name && (
                <div className="cart-order__input-feedback">{props.errors.name}</div>
              )}
            </label>
            <label className='cart-order__label'>
              <div className='cart-order__label-text'>Номер телефона</div>
              <MaskedInput
                className={
                  props.errors.phone && props.touched.phone ?
                  'cart-order__input cart-order__input_error'
                  :
                  'cart-order__input' 
                }
                name='phone' 
                type="text" 
                mask={phoneNumberMask}
                value={props.values.phone}
                onChange={(e) => {
                  const newErrors = props.errors
                  delete newErrors.phone
                  props.setErrors(newErrors)
                  props.handleChange(e)
                }}
                onBlur={props.handleBlur} />
              {props.errors.phone && props.touched.phone && (
                <div className="cart-order__input-feedback">{props.errors.phone}</div>
              )}
            </label>
            <label className='cart-order__label'>
              <div className='cart-order__label-text'>Комментарий</div>
              <textarea 
                className={
                  props.errors.comment && props.touched.comment ?
                  'cart-order__textarea cart-order__textarea_error'
                  :
                  'cart-order__textarea' 
                }
                name="comment"
                value={props.values.comment}
                onChange={props.handleChange}
                onBlur={props.handleBlur}></textarea>
              {props.errors.comment && props.touched.comment && (
                <div className="cart-order__input-feedback">{props.errors.comment}</div>
              )}
            </label>
            <button
              className='cart-order__submit'
              type='submit'
              disabled={props.isSubmitting}
              // onClick={order}
            >
              Оформить
            </button>
          </form>
        )
      }
    </Formik>
  );
};

export default CartOrder;