import { ProductsState, ProductsAction } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_CURRENT_PAGE, SET_PRODUCTS } from './actions'

const initialState: ProductsState = {
  items: [],
  size: 0,
  page: 0
}

const products = createReducer<ProductsState, ProductsAction>(initialState, {
  [SET_PRODUCTS]: (state, action) => ({
    ...state,
    items: action.payload.map(item => {
      return {
        ...item,
        isAddedCart: false
      }
    }),
  }),
  [SET_CURRENT_PAGE]: (state, action) => ({ ...state, currentPage: action.payload }),
});

export default products
