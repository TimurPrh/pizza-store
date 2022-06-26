const initialState = {menu: [], types: [], status: ''}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MENU_LOADING': 
      return {...state, status: 'loading'}
    case 'SET_MENU_ERROR':
      return {...state, status: 'error'}
    case 'SET_MENU_DONE':
        return {...state, status: 'done'}
    case 'RESET_MENU_STATUS':
      return {...state, status: ''}
    case 'ADD_MENU': 
      return {...state, types: action.payload.types, menu: action.payload.menu}
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
const setMenuLoadingAction = () => ({type: 'SET_MENU_LOADING'})
const setMenuErrorAction = () => ({type: 'SET_MENU_ERROR'})
const setMenuDoneAction = () => ({type: 'SET_MENU_DONE'})
const resetMenuStatusAction = () => ({type: 'RESET_MENU_STATUS'})

export {
  menuReducer, 
  addMenuAction, 
  addMenuItemsAction, 
  addTypesAction, 
  setMenuLoadingAction, 
  setMenuErrorAction, 
  setMenuDoneAction, 
  resetMenuStatusAction
}