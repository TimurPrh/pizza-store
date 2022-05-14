// const initialState = {cart: [
//   {count: 3, type: 'Пицца', id: 123, name: 'Ветчина и грибы', price: 300, img: '/assets/images/ham.jpeg', description: 'Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус'},
//   {count: 4, type: 'Пицца', id: 122, name: 'Пепперони', price: 250, img: '/assets/images/pepper.jpeg', description: 'Пикантная пепперони, увеличенная порция моцареллы, томатный соус'}
// ]}
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
    default: 
      return state
  }
}

const addItemAction = (payload) => ({type: 'ADD_ITEM', payload})
const removeItemAction = (payload) => ({type: 'REMOVE_ITEM', payload})
const removeAllItemsAction = (payload) => ({type: 'REMOVE_ALL_ITEMS', payload})

export {cartReducer, addItemAction, removeItemAction, removeAllItemsAction}