import { combineReducers, createStore } from "redux"
import { countReducer } from "./countStore"
import { usersReducer } from "./userStore"
import { cartReducer } from "./cartStore"

// const reducer = combineReducers({
//   countReducer,
//   usersReducer
// })

const reducer = combineReducers({
  cartReducer
})

export const store = createStore(reducer)