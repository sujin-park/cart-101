import React from 'react'
import styled from 'styled-components'

import FilledIcon from '../../assets/icon/filled-cart.svg'
import Icon from '../../assets/icon/cart.svg'

interface ProductCartProps {
  isAddedCart: boolean,
  addToCart: (e: React.MouseEvent<HTMLElement>) => void
}

const Image = styled.img`
  width: 20px;
  height: 20px;
`

const ProductScore: React.FC<ProductCartProps> = ({ isAddedCart, addToCart }) => {
  return (
    <Image src={isAddedCart ? FilledIcon : Icon} alt="장바구니" onClick={addToCart}/>
  )
}

export default ProductScore
