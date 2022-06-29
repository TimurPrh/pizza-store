const initialState = {types:  [], menu: [], usedTypes: [], limit: 3, count: 0, activePage: 1}

const adminContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TYPES':
      return {...state, types: action.payload}
    case 'SET_MENU':
      return {...state, menu: action.payload}
    case 'SET_USED_TYPES':
      return {...state, usedTypes: action.payload}
    case 'SET_ACTIVE_PAGE':
      return {...state, activePage: action.payload}
    case 'SET_PAGE_COUNT':
      return {...state, count: action.payload}
    default: 
      return state
  }
}

const setAdminContentTypesAction = (payload) => ({type: 'SET_TYPES', payload})
const setAdminContentMenuAction = (payload) => ({type: 'SET_MENU', payload})
const setAdminContentUsedTypesAction = (payload) => ({type: 'SET_USED_TYPES', payload})
const setActivePageAction = (payload) => ({type: 'SET_ACTIVE_PAGE', payload})
const setPageCountAction = (payload) => ({type: 'SET_PAGE_COUNT', payload})

export {
  adminContentReducer, 
  setAdminContentTypesAction, 
  setAdminContentMenuAction, 
  setAdminContentUsedTypesAction,
  setActivePageAction,
  setPageCountAction
}