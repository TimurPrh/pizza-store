const initialState = {status: '', type: {}, menuItem: {}, availableTypes: {}, form: '', errorMessage: ''}

const adminAddingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADD_TYPE':
      return {...state, status: 'add-type-form', form: 'type'}
    case 'SET_CHANGE_TYPE':
      return {...state, status: 'change-type-form', type: action.payload, form: 'type'}
    case 'SET_ADD_MENU':
      return {...state, status: 'add-menu-form', availableTypes: action.payload.availableTypes, form: 'menu'}
    case 'SET_CHANGE_MENU':
      return {...state, status: 'change-menu-form', menuItem: action.payload.menuItem, availableTypes: action.payload.availableTypes, form: 'menu'}
    case 'SET_LOADING': 
      return {...state, status: 'loading'}
    case 'SET_ERROR':
      return {...state, status: 'error', errorMessage: action.payload}
    case 'SET_DONE':
        return {...state, status: 'done'}
    case 'RESET_STATUS':
      return {status: '', type: {}, menuItem: {}, availableTypes: {}, form: '', errorMessage: ''}
    default: 
      return state
  }
}

const setAdminAddTypeAction = () => ({type: 'SET_ADD_TYPE'})
const setAdminChangeTypeAction = (payload) => ({type: 'SET_CHANGE_TYPE', payload})
const setAdminAddMenuAction = (payload) => ({type: 'SET_ADD_MENU', payload})
const setAdminChangeMenuAction = (payload) => ({type: 'SET_CHANGE_MENU', payload})
const setAdminLoadingAction = () => ({type: 'SET_LOADING'})
const setAdminErrorAction = (payload) => ({type: 'SET_ERROR', payload})
const setAdminDoneAction = () => ({type: 'SET_DONE'})
const resetAdminStatusAction = () => ({type: 'RESET_STATUS'})

export {
  adminAddingReducer, 
  setAdminAddTypeAction, 
  setAdminChangeTypeAction, 
  setAdminAddMenuAction,
  setAdminChangeMenuAction,
  setAdminLoadingAction, 
  setAdminErrorAction, 
  setAdminDoneAction, 
  resetAdminStatusAction
}