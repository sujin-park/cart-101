import { createAction } from 'typesafe-actions'
import { Product } from '../products'

export const ADD_TO_CART = 'cart/ADD_TO_CART'
export const REMOVE_CART = 'cart/REMOVE_CART'
export const SET_TOTAL_PRICE = 'cart/SET_TOTAL_PRICE'

export const addToCart = createAction(ADD_TO_CART)<Product>()
export const removeCart = createAction(REMOVE_CART)<string>()
export const setTotalPrice = createAction(SET_TOTAL_PRICE)()
