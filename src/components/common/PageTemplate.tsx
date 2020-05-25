import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const Contents = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 90px 16px;
`

const PageTemplate: React.FC = ({ children }) => (
    <>
      <Header />
      <Contents>
        { children }
      </Contents>
      <Footer />
    </>
)

export default PageTemplate
