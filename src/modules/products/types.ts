import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type ProductsAction = ActionType<typeof actions>

export type Product = {
  id: string
  title: string
  coverImage: string
  price: number
  score: number
  availableCoupon?: boolean
  isAddedCart?: boolean
};

export type ProductsState = {
  items: Product[]
  size: number
  page: number
}
