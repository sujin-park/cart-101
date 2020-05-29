import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../modules'

import PageTitle from '../components/common/PageTitle'
import Button from '../components/common/Button'
import CartSummary from '../components/cart/CartSummary'
import CartDetail from '../components/cart/CartDetail'
import CartList from '../components/cart/CartLIst'

import { setTotalPrice } from '../modules/cart'

const CartPage: React.FC = () => {
  const dispatch = useDispatch()
  const cartRef = useRef<HTMLDivElement>(null)
  const { addedItems, totalPrice } = useSelector((state: RootState) => state.cart)
  const onClick = () => alert('구매하기')

  useEffect(() => {
    dispatch(setTotalPrice())
  }, [addedItems, dispatch])

  return (
    <>
      <PageTitle title="장바구니"/>
      <CartList>
        {addedItems.map(
          ({ id, title, price, coverImage }) => (
            <CartDetail
              ref={cartRef}
              key={id}
              id={id}
              title={title}
              price={price}
              coverImage={coverImage}
            />
          ),
        )}
      </CartList>
      <CartSummary
        totalPrice={totalPrice}
        discountPrice={0}
        payPrice={totalPrice}
      />
      <Button onClick={onClick}>{addedItems.length}건 구매하기</Button>
    </>
  )
}

export default CartPage
