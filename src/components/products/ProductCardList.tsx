import React from 'react'
import styled from 'styled-components'

import { ProductCardProps } from './ProductCard'

interface ProductCardListProps {
  children: React.ReactElement<ProductCardProps>[]
  loading: boolean
}

const Container = styled.div<{ loading: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 36px;
  opacity: ${({ loading }) => (loading ? 0.2 : 1)};
`

const ProductCardList: React.FC<ProductCardListProps> = ({ children, loading }) => (
    <Container className="card-list" loading={loading}>
      {children}
    </Container>
)

export default ProductCardList
