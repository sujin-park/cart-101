import React from 'react'

import PageTitle from '../components/common/PageTitle'
import ProductCard from '../components/products/ProductCard'

const ProductsPage: React.FC = () => (
    <>
      <PageTitle title="상품 목록" />
      <ProductCard title="타이틀" price={3000} score={3}/>
    </>
)

export default ProductsPage
