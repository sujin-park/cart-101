import React, { forwardRef } from 'react'
import styled from 'styled-components'

export interface CartDetailProps {
  ref: React.Ref<HTMLDivElement>
  id: string
  title: string
  price: number
  coverImage?: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

const Image = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`

const DetailContainer = styled.div``

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

const Price = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
`

const filterCurrencyWon = (value: number) => value ?`${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : 0

const CartDetail: React.FC<CartDetailProps> = forwardRef(({ id, title, price, coverImage = '' }, ref) => (
    <Container ref={ref}>
      <ImageContainer>
        <Image src={coverImage} alt="상품 사진" />
      </ImageContainer>
      <DetailContainer>
        <Title>{ title }</Title>
        <Price>{ filterCurrencyWon(price) }원</Price>
      </DetailContainer>
    </Container>
))

export default CartDetail
