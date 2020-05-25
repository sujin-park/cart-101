import React from 'react'
import styled from 'styled-components'

import Icon from '../../assets/icon/filled-heart.svg'

interface ProductScoreProps {
  score: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 20px;
  height: 20px;
`

const Text = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.darkGreyColor};
  margin: 4px 0 0 8px;
`

const ProductScore: React.FC<ProductScoreProps> = ({ score }) => {
  return (
      <Container>
        <Image src={Icon} alt="점수"/>
        <Text>{ score }</Text>
      </Container>
  )
}
export default ProductScore
