import { createAction } from 'typesafe-actions'
import { Product } from './types'

export const SET_PRODUCTS = 'products/SET_PRODUCTS'
export const SET_TOTAL_ITEMS = 'products/SET_TOTAL_ITEMS'

export const setProducts = createAction(SET_PRODUCTS)<Product[]>()
export const setTotalItems = createAction(SET_TOTAL_ITEMS)()

