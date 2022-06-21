const initialState = {menu: [], types: []}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MENU': 
      return {types: action.payload.types, menu: action.payload.menu}
    case 'ADD_MENU_ITEMS': 
      return {...state, menu: action.payload.menu}
    case 'ADD_TYRES': 
      return {...state, types: action.payload.types}
    default: 
      return state
  }
}

const addMenuAction = (payload) => ({type: 'ADD_MENU', payload})
const addMenuItemsAction = (payload) => ({type: 'ADD_MENU_ITEMS', payload})
const addTypesAction = (payload) => ({type: 'ADD_TYPES', payload})

export {menuReducer, addMenuAction, addMenuItemsAction, addTypesAction}