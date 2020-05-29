import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type PaymentAction = ActionType<typeof actions>

export type Coupon = {
  type: string
  title: string
  discountRate?: number
  discountAmount?: number
}

export type PaymentState = {
  coupons: Coupon[]
}
