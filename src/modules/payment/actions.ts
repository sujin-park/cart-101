import { createAction } from 'typesafe-actions'
import { Coupon } from './types'

export const FETCH_COUPONS = 'payment/FETCH_COUPONS'
export const SET_COUPONS = 'payment/SET_COUPONS'

export const fetchCoupons = createAction(FETCH_COUPONS)()
export const setCoupons = createAction(SET_COUPONS)<Coupon[]>()
