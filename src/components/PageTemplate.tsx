import React from 'react'
import styled from 'styled-components'

import Header from './common/Header'
import Footer from './common/Footer'

const Contents = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 64px 0;
`

const PageTemplate: React.FC = ({ children }) => (
    <>
      <Header />
      <Contents>
        {children}
      </Contents>
      <Footer />
    </>
)

export default PageTemplate
