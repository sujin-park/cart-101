import React from 'react'
import styled from 'styled-components'

interface PageTitleProps {
  title: string
}

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
  margin-bottom: 16px;
`

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
      <Title>{ title }</Title>
  )
}

export default PageTitle
