const initialState = {users: []}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USERS': 
      return {...state, users: [...state.users, ...action.payload]}
    case 'ADD_USER':
      return {...state, users: [...state.users, {name: action.payload}]}
    case 'REMOVE_USER':
      return {...state, users: state.users.filter(user => user !== action.payload)}
    default: 
      return state
  }
}

const addUserAction = (payload) => ({type: 'ADD_USER', payload})
const addUsersAction = (payload) => ({type: 'ADD_USERS', payload})
const removeUserAction = (payload) => ({type: 'REMOVE_USER', payload})

export {usersReducer, addUserAction, addUsersAction, removeUserAction}