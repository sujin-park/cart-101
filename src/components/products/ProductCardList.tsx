import React from 'react'
import styled from 'styled-components'

import { ProductCardProps } from './ProductCard'

interface ProductCardListProps {
  children: React.ReactElement<ProductCardProps>[]
  loading: boolean
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 36px;
`

const ProductCardList: React.FC<ProductCardListProps> = ({ children, loading }) => (
    <Container className="card-list">
      {children}
    </Container>
)

export default ProductCardList
