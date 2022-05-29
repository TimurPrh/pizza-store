import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCartAction } from '../../store/cartStore';
import { resetStatusAction } from '../../store/orderingStore';
import './modal.scss'

const Modal = ({type}) => {
  const navigate = useNavigate()

  const modalRef = useRef(null)

  const dispatch = useDispatch()

  const reset = () => {
    dispatch(resetStatusAction())
    dispatch(clearCartAction())
    if (type === 'done' || type === 'loading') {
      navigate('/')
    }
  }

  let message

  switch (type) {
    case 'loading':
      message = (
        <>
          <div className="modal__subtitle">Отправка...</div>
        </>
      )
      break;
    case 'error':
      message = (
        <>
          <div className="modal__subtitle">Ошибка!</div>
          <div className="modal__desc">Произошла ошибка, Попробуйте позднее!</div>
        </>
      )
      break;
    case 'done':
      message = (
        <>
          <div className="modal__subtitle">Спасибо за заказ!</div>
          <div className="modal__desc">Наш менеджер свяжется с вами в ближайшее время!</div>
        </>
      )
      break;

    default:
      break;
  }

  function useOutsideCLick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          reset()
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideCLick(modalRef);

  return (
    <div className="overlay">
        <div ref={modalRef} className="modal">
          <div onClick={reset} className="modal__close">&times;</div>
          {message}
        </div>
    </div>
  )
}

export default Modal;