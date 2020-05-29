import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Container = styled.button`
  width: 100%;
  color: #fff;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 12px 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  border: 0 none;
  border-radius: 4px;
  cursor: pointer;
  outline: 0 none;
`

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <Container onClick={onClick}>
    {children}
  </Container>
)

export default Button
