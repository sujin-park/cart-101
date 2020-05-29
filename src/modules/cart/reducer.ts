import { CartState, CartAction } from './types'
import { createReducer } from 'typesafe-actions'
import { ADD_TO_CART, REMOVE_CART, SET_TOTAL_PRICE } from './actions'
import { Product } from '../products'

const initialState: CartState = {
  addedItems: [],
  totalPrice: 0
}

const payment = createReducer<CartState, CartAction>(initialState, {
  [ADD_TO_CART]: (state, action) => ({
    ...state,
    addedItems: state.addedItems.concat({ ...action.payload })
  }),
  [REMOVE_CART]: (state, { payload: id }) => ({
    ...state,
    addedItems: state.addedItems.filter((item: Product) => item.id !== id)
  }),
  [SET_TOTAL_PRICE]: (state) => ({
    ...state,
    totalPrice: state.addedItems.reduce((prev, next) => {
      return prev + next.price
    }, 0)
  }),
})

export default payment
