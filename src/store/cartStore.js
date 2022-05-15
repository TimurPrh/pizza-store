const initialState = {cart: []}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': 
      const addIndex = state.cart.findIndex(item => item.id === action.payload.id)
      let newCart
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
      return {...state, cart: newCart}
    case 'REMOVE_ITEM':
      const removeIndex = state.cart.findIndex(item => item.id === action.payload)
      if (state.cart[removeIndex].count > 1) {
        const newCart = state.cart.map((item, i) => {
          if (i === removeIndex) {
            return {...item, count: item.count - 1}
          }
          return item 
        })
        return {...state, cart: newCart}
      }
      return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    case 'REMOVE_ALL_ITEMS':
      return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    case 'CLEAR_CART':
      return {...state, cart: []}
    default: 
      return state
  }
}

const addItemAction = (payload) => ({type: 'ADD_ITEM', payload})
const removeItemAction = (payload) => ({type: 'REMOVE_ITEM', payload})
const removeAllItemsAction = (payload) => ({type: 'REMOVE_ALL_ITEMS', payload})
const clearCartAction = () => ({type: 'CLEAR_CART'})

export {cartReducer, addItemAction, removeItemAction, removeAllItemsAction, clearCartAction}