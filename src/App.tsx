import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import Theme from './styles/Theme'

import PageTemplate from './components/common/PageTemplate'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'

interface AppProps {}

const App: React.FC<AppProps> = () => (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <PageTemplate>
            <Switch>
              <Route path="/products" component={ProductsPage} exact/>
              <Route path="/cart" component={CartPage} />
            </Switch>
          <GlobalStyle />
        </PageTemplate>
      </BrowserRouter>
    </ThemeProvider>
)

export default App
