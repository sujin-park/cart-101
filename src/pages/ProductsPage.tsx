import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../modules'
import PageTitle from '../components/common/PageTitle'
import ProductCard from '../components/products/ProductCard'
import ProductCardList from '../components/products/ProductCardList'


const ProductsPage: React.FC = () => {
  const products = useSelector((state: RootState) => state.products)

  return (
    <>
      <PageTitle title="상품 목록"/>
      <ProductCard title="타이틀" price={3000} score={3}/>
      <ProductCardList loading={true}>
        {products.map(
          ({ id, title, price, coverImage, score, isAddedCart }) => (
              <ProductCard
                key={id}
                title={title}
                price={price}
                coverImage={coverImage}
                score={score}
                isAddedCart={isAddedCart}
              />
            ),
        )}
      </ProductCardList>
    </>
  )
}

export default ProductsPage
