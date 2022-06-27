const initialState = {types:  [], menu: [], usedTypes: []}

const adminContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TYPES':
      return {...state, types: action.payload}
    case 'SET_MENU':
      return {...state, menu: action.payload}
    case 'SET_USED_TYPES':
      return {...state, usedTypes: action.payload}
    default: 
      return state
  }
}

const setAdminContentTypesAction = (payload) => ({type: 'SET_TYPES', payload})
const setAdminContentMenuAction = (payload) => ({type: 'SET_MENU', payload})
const setAdminContentUsedTypesAction = (payload) => ({type: 'SET_USED_TYPES', payload})

export {
  adminContentReducer, 
  setAdminContentTypesAction, 
  setAdminContentMenuAction, 
  setAdminContentUsedTypesAction
}