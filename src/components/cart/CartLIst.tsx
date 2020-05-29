import React from 'react'
import styled from 'styled-components'

import { CartDetailProps } from './CartDetail'

interface CartListProps {
  children: React.ReactElement<CartDetailProps>[]
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 24px;
  }
`

const CartList: React.FC<CartListProps> = ({ children }) => (
    <Container>
      {children}
    </Container>
)

export default CartList
