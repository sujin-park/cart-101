import { all, call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_PRODUCTS, setCurrentPage } from '../modules/products'
import { setProducts } from '../modules/products'

const fetchProducts = function* ({ payload: { size, page } }: any) {
  try {
    const {
      status,
      data: { items = [], currentPage },
    } = yield call(() => axios.get('https://api-class101.com/products', {
      params: { size, page }
    }))

    if (status === 200) {
      yield put(setProducts(items))
      yield put(setCurrentPage(currentPage))
    }
  } catch (e) {
    console.error(e)
  }
}

export default function* () {
  yield all([
    takeEvery([FETCH_PRODUCTS], fetchProducts)
  ])
}
