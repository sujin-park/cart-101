import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { Product } from '../products'

export type CartAction = ActionType<typeof actions>

export type CartState = {
  addedItems: Product[]
  totalPrice: number
}
