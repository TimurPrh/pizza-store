import { combineReducers, createStore } from "redux"
import { menuReducer } from "./menuStore"
import { orderingReducer } from "./orderingStore"
import { cartReducer } from "./cartStore"
import { positionReducer } from './positionStore'

const reducer = combineReducers({
  menuReducer,
  cartReducer,
  orderingReducer,
  positionReducer
})

export const store = createStore(reducer)