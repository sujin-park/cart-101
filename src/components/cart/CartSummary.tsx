import React from 'react'
import styled from 'styled-components'

type CartSummaryProps = {
  totalPrice: number
  discountPrice: number
  payPrice: number
}

const Container = styled.div`
  width: 100%;
  border: solid 1px ${({ theme }) => theme.lightGreyColor};
  padding: 16px 8px;
  margin-bottom: 24px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  &:last-child {
    padding-top: 8px;
    margin-bottom: 0;
    border-top: solid 1px ${({ theme }) => theme.lightGreyColor};
  }
`

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
`

const Contents = styled.span`
  font-size: 14px;
`

const filterCurrencyWon = (value: number) => value ?`${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : 0

const CartSummary: React.FC<CartSummaryProps> = ({ totalPrice, discountPrice, payPrice }) => (
  <Container>
    <Row>
      <Title>총 상품금액</Title>
      <Contents>{ filterCurrencyWon(totalPrice) }원</Contents>
    </Row>
    <Row>
      <Title>총 할인금액</Title>
      <Contents>{ filterCurrencyWon(discountPrice) }원</Contents>
    </Row>
    <Row>
      <Title>결제금액</Title>
      <Contents>{ filterCurrencyWon(payPrice) }원</Contents>
    </Row>
  </Container>
)

export default CartSummary
