import { all } from '@redux-saga/core/effects'
import products from './products'
import coupons from './coupons'

export default function* rootSaga() {
  yield all([products(), coupons()])
}
