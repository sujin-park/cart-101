import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageTitle from '../components/common/PageTitle'
import ProductCard from '../components/products/ProductCard'
import ProductCardList from '../components/products/ProductCardList'

import IntersectionObserver from '../lib/io'
import { RootState } from '../modules'
import { FETCH_PRODUCTS, SET_CURRENT_PAGE } from '../modules/products'

const SIZE = 5

const ProductsPage: React.FC = () => {
  const productRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const { items, page, hasNext } = useSelector((state: RootState) => state.products)

  const io = IntersectionObserver(
    () => {
      dispatch({ type: SET_CURRENT_PAGE, payload: page + 1 })
    }
  )

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS, payload: { size: SIZE, page } })
  }, [page, dispatch])

  useEffect(() => {
    if (productRef.current && hasNext) {
      io.observe(productRef.current)
    }

    return () => {
      io.disconnect()
    }
  }, [hasNext, productRef.current])

  const addToCart = () => dispatch({ type: FETCH_PRODUCTS })

  return (
    <>
      <PageTitle title="상품 목록"/>
      <ProductCardList loading={true}>
        {items.map(
          ({ id, title, price, coverImage, score, isAddedCart }) => (
            <ProductCard
              ref={productRef}
              key={id}
              title={title}
              price={price}
              coverImage={coverImage}
              score={score}
              isAddedCart={isAddedCart}
              addToCart={addToCart}
            />
          ),
        )}
      </ProductCardList>
    </>
  )
}

export default ProductsPage
