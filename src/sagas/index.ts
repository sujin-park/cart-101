import { all } from '@redux-saga/core/effects'
import products from './products'

export default function* rootSaga() {
  yield all([products()])
}
