import { combineReducers, createStore } from "redux"
import { orderingReducer } from "./orderingStore"
import { cartReducer } from "./cartStore"

const reducer = combineReducers({
  cartReducer,
  orderingReducer
})

export const store = createStore(reducer)