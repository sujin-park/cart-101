import { createAction } from 'typesafe-actions'
import { Product } from './types'

export const FETCH_PRODUCTS = 'products/FETCH_PRODUCTS'
export const SET_PRODUCTS = 'products/SET_PRODUCTS'
export const SET_CURRENT_PAGE = 'products/SET_CURRENT_PAGE'

export const fetchProducts = createAction(FETCH_PRODUCTS)<{ size: number, page: number }>()
export const setProducts = createAction(SET_PRODUCTS)<Product[]>()
export const setCurrentPage = createAction(SET_CURRENT_PAGE)<{ page: number }>()
