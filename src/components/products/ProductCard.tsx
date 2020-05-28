import React, { forwardRef } from 'react'
import styled from 'styled-components'

import ProductScore from './ProductScore'
import ProductCart from './ProductCart'

export interface ProductCardProps {
  ref: React.Ref<HTMLDivElement>
  title: string
  price: number
  coverImage?: string
  score: number
  isAddedCart?: boolean
  addToCart: (e: React.MouseEvent<HTMLElement>) => void
}

const Container = styled.div`
  width: 100%;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

const Price = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`

const filterCurrencyWon = (value: number) => value ?`${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : 0

const ProductCard: React.FC<ProductCardProps> = forwardRef(({ title, price, coverImage = 'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729', score, isAddedCart = false, addToCart }, ref) => (
    <Container ref={ref}>
      <ImageContainer>
        <Image src={coverImage} alt="상품 사진" />
      </ImageContainer>
      <Title>{ title }</Title>
      <Price>{ filterCurrencyWon(price) }원</Price>
      <ProductScore score={score}/>
      <ProductCart isAddedCart={isAddedCart} addToCart={addToCart}/>
    </Container>
))

export default ProductCard
