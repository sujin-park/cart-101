import { all, call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_PRODUCTS, setCurrentPage, setNext, setProducts } from '../modules/products'

const fetchProducts = function* ({ payload: { size, page } }: any) {
  try {
    const {
      status,
      data: { items = [], currentPage, hasNext },
    } = yield call(() => axios.get('https://api-class101.com/products', {
      params: { size, page }
    }))

    if (status === 200) {
      yield put(setProducts(items))
      yield put(setCurrentPage(currentPage))
      yield put(setNext(hasNext))
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
