import React from 'react'
import styled from 'styled-components'

import { ProductCardProps } from './ProductCard'

interface ProductCardListProps {
  children: React.ReactElement<ProductCardProps>[]
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 24px;
  }
`

const ProductCardList: React.FC<ProductCardListProps> = ({ children }) => (
    <Container>
      {children}
    </Container>
)

export default ProductCardList
