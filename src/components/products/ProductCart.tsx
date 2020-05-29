import React from 'react'
import styled from 'styled-components'

import FilledIcon from '../../assets/icon/filled-cart.svg'
import Icon from '../../assets/icon/cart.svg'

interface ProductCartProps {
  id: string
  isAddedCart: boolean,
  addToCart: (id: string) => void
}

const Image = styled.img`
  width: 20px;
  height: 20px;
`

const ProductScore: React.FC<ProductCartProps> = ({ id, isAddedCart, addToCart }) => {
  return (
    <Image src={isAddedCart ? FilledIcon : Icon} alt="장바구니" onClick={() => addToCart(id)}/>
  )
}

export default ProductScore
