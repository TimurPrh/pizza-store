const initialState = {cart: [], sum: 0}

const getSum = (arr) => {
  return arr.reduce(
    (previous, current) =>  previous + parseInt(current.price) * current.count, 0
  );
}

const cartReducer = (state = initialState, action) => {
  let sum
  let newCart
  switch (action.type) {
    case 'ADD_ITEM': 
      const addIndex = state.cart.findIndex(item => item.id === action.payload.id)
      if (addIndex === -1) {
        newCart = [...state.cart, {...action.payload, count: 1}]
      } else {
        newCart = state.cart.map((item, i) => {
          if (i === addIndex) {
            return {...item, count: item.count + 1}
          }
          return item 
        })
      }

      sum = getSum(newCart)

      return {cart: newCart, sum}
    case 'REMOVE_ITEM':
      const removeIndex = state.cart.findIndex(item => item.id === action.payload)
      if (state.cart[removeIndex].count > 1) {
        newCart = state.cart.map((item, i) => {
          if (i === removeIndex) {
            return {...item, count: item.count - 1}
          }
          return item 
        })
        // return {...state, cart: newCart}
      } else {
        newCart = state.cart.filter(item => item.id !== action.payload)
      }

      sum = getSum(newCart)

      return {cart: newCart, sum}
    case 'REMOVE_ALL_ITEMS':
      newCart = state.cart.filter(item => item.id !== action.payload)
      sum = getSum(newCart)
      return {cart: newCart, sum}
    case 'CLEAR_CART':
      return {cart: [], sum: 0}
    default: 
      return state
  }
}

const addItemAction = (payload) => ({type: 'ADD_ITEM', payload})
const removeItemAction = (payload) => ({type: 'REMOVE_ITEM', payload})
const removeAllItemsAction = (payload) => ({type: 'REMOVE_ALL_ITEMS', payload})
const clearCartAction = () => ({type: 'CLEAR_CART'})

export {cartReducer, addItemAction, removeItemAction, removeAllItemsAction, clearCartAction}