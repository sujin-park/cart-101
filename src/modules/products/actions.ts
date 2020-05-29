import { createAction } from 'typesafe-actions'
import { Product } from './types'

export const FETCH_PRODUCTS = 'products/FETCH_PRODUCTS'
export const SET_PRODUCTS = 'products/SET_PRODUCTS'
export const SET_CURRENT_PAGE = 'products/SET_CURRENT_PAGE'
export const SET_NEXT = 'products/SET_NEXT'
export const TOGGLE_CART = 'products/TOGGLE_CART'

export const fetchProducts = createAction(FETCH_PRODUCTS)<{ size: number, page: number }>()
export const setProducts = createAction(SET_PRODUCTS)<Product[]>()
export const setCurrentPage = createAction(SET_CURRENT_PAGE)<number>()
export const setNext = createAction(SET_NEXT)<boolean>()
export const setToggleCart = createAction(TOGGLE_CART)<{ id: string }>()
