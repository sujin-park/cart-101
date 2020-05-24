import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  border-bottom: solid 1px ${({ theme }) => theme.lightGreyColor};
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.maxWidth};
  height: 100%;
  margin: 0 auto;
`

const Menu = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.blackColor};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Header: React.FC = () => {
  return (
      <Container>
        <InnerContainer>
          <img
              src="https://class101.net/images/class101-main-logo.svg"
              width={100}
              alt=""
          />
          <Menu to="/cart">장바구니로 가기</Menu>
        </InnerContainer>
      </Container>
  )
}

export default Header
