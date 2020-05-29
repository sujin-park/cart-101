import { all, call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_COUPONS, setCoupons } from '../modules/payment'

const fetchCoupons = function* () {
  try {
    const {
      status,
      data: { items = [] },
    } = yield call(() => axios.get('https://api-class101.com/coupons', {}))

    if (status === 200) {
      yield put(setCoupons(items))
    }
  } catch (e) {
    console.error(e)
  }
}

export default function* () {
  yield all([
    takeEvery([FETCH_COUPONS], fetchCoupons)
  ])
}
