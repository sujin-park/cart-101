import { PaymentState, PaymentAction } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_COUPONS } from './actions'

const initialState: PaymentState = {
  coupons: [],
}

const payment = createReducer<PaymentState, PaymentAction>(initialState, {
  [SET_COUPONS]: (state, action) => ({ ...state, ...action.payload }),
})

export default payment
