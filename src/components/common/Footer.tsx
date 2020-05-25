import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 48px;
  color: ${({ theme }) => theme.blackColor};
  background: #fff;
  border-top: solid 1px ${({ theme }) => theme.blackColor};
  box-sizing: border-box;
  text-align: center;
`

const Footer: React.FC = () => (
  <FooterContainer>
    Copyright 2020. 박수진. ALL RIGHTS RESERVED.
  </FooterContainer>
)

export default Footer
