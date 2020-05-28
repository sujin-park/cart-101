import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageTitle from '../components/common/PageTitle'
import ProductCard from '../components/products/ProductCard'
import ProductCardList from '../components/products/ProductCardList'

import { RootState } from '../modules'
import { FETCH_PRODUCTS } from '../modules/products'

const SIZE = 5

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch()
  const { items, page } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS, payload: { size: SIZE, page } })
  }, [page, dispatch])

  const addToCart = () => dispatch({ type: FETCH_PRODUCTS })

  return (
    <>
      <PageTitle title="상품 목록"/>
      <ProductCardList loading={true}>
        {items.map(
          ({ id, title, price, coverImage, score, isAddedCart }) => (
              <ProductCard
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
