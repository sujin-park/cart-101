import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../modules'

import PageTitle from '../components/common/PageTitle'
import ProductCard from '../components/products/ProductCard'
import ProductCardList from '../components/products/ProductCardList'

import IntersectionObserver from '../lib/io'
import { fetchProducts, setCurrentPage, setToggleCart, Product } from '../modules/products'
import { addToCart, removeCart } from '../modules/cart'

const SIZE = 5

const ProductsPage: React.FC = () => {
  const productRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const { items, page, hasNext } = useSelector((state: RootState) => state.products)

  const io = IntersectionObserver(
    () => {
      dispatch(setCurrentPage(page + 1))
    }
  )

  useEffect(() => {
    dispatch(fetchProducts({ size: SIZE, page }))
  }, [page, dispatch])

  useEffect(() => {
    if (productRef.current && hasNext) {
      io.observe(productRef.current)
    }

    return () => {
      io.disconnect()
    }
  }, [hasNext, productRef.current])

  const toggleCart = (id: string) => {
    dispatch(setToggleCart({ id }))

    const addedItem = items.find((item: Product) => item.id === id) as Product
    addedItem && addedItem.isAddedCart ? dispatch(removeCart(id)) : dispatch(addToCart(addedItem))
  }

  return (
    <>
      <PageTitle title="상품 목록"/>
      <ProductCardList>
        {items.map(
          ({ id, title, price, coverImage, score, isAddedCart }) => (
            <ProductCard
              ref={productRef}
              key={id}
              id={id}
              title={title}
              price={price}
              coverImage={coverImage}
              score={score}
              isAddedCart={isAddedCart}
              addToCart={toggleCart}
            />
          ),
        )}
      </ProductCardList>
    </>
  )
}

export default ProductsPage
