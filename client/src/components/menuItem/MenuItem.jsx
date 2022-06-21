import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, removeAllItemsAction } from '../../store/cartStore';
import './menuItem.scss'

const MenuItem = ({item}) => {
  const [added, setAdded] = useState(false)

  const cart = useSelector(state => state.cartReducer.cart)

  const dispatch = useDispatch()

  const addToCart = () => {
    if (added) {
      dispatch(removeAllItemsAction(item.id))
      setAdded(false)
    } else {
      dispatch(addItemAction({...item}))
      setAdded(true)
    }
  }

  useEffect(() => {
    setAdded(cart.findIndex(el => el.id === item.id) !== -1)
  }, [cart])

  return (
    <div className='menu-item'>
      <div className='menu-item__top'>
        <div className='menu-item__img'>
          <img src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
        </div>
        <div className='menu-item__text'>
          <div className='menu-item__name'>
            {item.name}
          </div>
          <div className='menu-item__description'>
            {item.description}
          </div>
        </div>
      </div>
      <div className='menu-item__bottom'>
        <div className='menu-item__price'>
          {item.price} ₽
        </div>
        {
          added ?
          <button
            className='menu-item__add menu-item__add_added'
            onClick={addToCart}
          >
            В корзине
          </button>
          :
          <button
            className='menu-item__add'
            onClick={addToCart}
          >
            Добавить
          </button>
        }
      </div>
    </div>
  );
};

export default MenuItem;