const initialState = {status: '', id: {}}

const adminAddingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADD_TYPE':
      return {...state, status: 'add-type-form'}
    case 'SET_CHANGE_TYPE':
      return {...state, status: 'change-type-form', type: action.payload}
    case 'SET_LOADING': 
      return {...state, status: 'loading'}
    case 'SET_ERROR':
      return {...state, status: 'error'}
    case 'SET_DONE':
        return {...state, status: 'done'}
    case 'RESET_STATUS':
      return {type: {}, status: ''}
    default: 
      return state
  }
}

const setAdminAddTypeAction = () => ({type: 'SET_ADD_TYPE'})
const setAdminChangeTypeAction = (payload) => ({type: 'SET_CHANGE_TYPE', payload})
const setAdminLoadingAction = () => ({type: 'SET_LOADING'})
const setAdminErrorAction = () => ({type: 'SET_ERROR'})
const setAdminDoneAction = () => ({type: 'SET_DONE'})
const resetAdminStatusAction = () => ({type: 'RESET_STATUS'})

export {adminAddingReducer, setAdminAddTypeAction, setAdminLoadingAction, setAdminErrorAction, setAdminDoneAction, resetAdminStatusAction, setAdminChangeTypeAction}