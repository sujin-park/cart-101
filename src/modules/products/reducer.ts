import { ProductsState, ProductsAction } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_PRODUCTS } from './actions'

const initialState: ProductsState = []

const products = createReducer<ProductsState, ProductsAction>(initialState, {
  [SET_PRODUCTS]: (state, action) =>
    state.concat({
      ...action.payload,
      isAddedCart: false,
    }),
});

export default products
