import { combineReducers, createStore } from "redux"
import { menuReducer } from "./menuStore"
import { orderingReducer } from "./orderingStore"
import { cartReducer } from "./cartStore"
import { positionReducer } from './positionStore'
import { adminAddingReducer } from './adminAddingStore'

const reducer = combineReducers({
  menuReducer,
  cartReducer,
  orderingReducer,
  positionReducer,
  adminAddingReducer
})

export const store = createStore(reducer)