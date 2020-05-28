import { ProductsState, ProductsAction } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_CURRENT_PAGE, SET_PRODUCTS, SET_NEXT } from './actions'

const initialState: ProductsState = {
  items: [],
  size: 0,
  page: 0,
  hasNext: true
}

const products = createReducer<ProductsState, ProductsAction>(initialState, {
  [SET_PRODUCTS]: (state, action) => ({
    ...state,
    items: state.items.concat(action.payload.map(item => {
      return {
        ...item,
        isAddedCart: false
      }
    })),
  }),
  [SET_CURRENT_PAGE]: (state, action) => ({ ...state, page: action.payload }),
  [SET_NEXT]: (state, action) => ({ ...state, hasNext: action.payload }),
});

export default products
