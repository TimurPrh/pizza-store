const initialState = {status: ''}

const orderingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING': 
      return {status: 'loading'}
    case 'SET_ERROR':
      return {status: 'error'}
    case 'SET_DONE':
        return {status: 'done'}
    case 'RESET_STATUS':
      return {status: ''}
    default: 
      return state
  }
}

const setLoadingAction = () => ({type: 'SET_LOADING'})
const setErrorAction = () => ({type: 'SET_ERROR'})
const setDoneAction = () => ({type: 'SET_DONE'})
const resetStatusAction = () => ({type: 'RESET_STATUS'})

export {orderingReducer, setLoadingAction, setErrorAction, setDoneAction, resetStatusAction}