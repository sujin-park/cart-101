import { combineReducers } from 'redux'
import products from './products'

const rootReducer = combineReducers({
  products
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
