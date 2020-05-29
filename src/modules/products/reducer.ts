import { ProductsState, ProductsAction } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_CURRENT_PAGE, SET_PRODUCTS, SET_NEXT, TOGGLE_CART } from './actions'
import { Product } from './types'

const initialState: ProductsState = {
  items: [],
  size: 0,
  page: 0,
  hasNext: true
}

const products = createReducer<ProductsState, ProductsAction>(initialState, {
  [SET_PRODUCTS]: (state, action) => ({
    ...state,
    items: state.items.concat(action.payload.map((item: Product) => {
      return {
        ...item,
        isAddedCart: false
      }
    })),
  }),
  [SET_CURRENT_PAGE]: (state, action) => ({ ...state, page: action.payload }),
  [SET_NEXT]: (state, action) => ({ ...state, hasNext: action.payload }),
  [TOGGLE_CART]: (state, { payload: { id } }) => ({
    ...state,
    items: state.items.map(item => (item.id === id ? { ...item, isAddedCart: !item.isAddedCart }: item)),
  })
})

export default products
