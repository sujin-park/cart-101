import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'

import './api'
import rootReducer from './modules'
import rootSaga from './sagas'

const middleware = createSagaMiddleware()

const composedMiddleware =
    process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(middleware))
        : composeWithDevTools(applyMiddleware(middleware))

const store = createStore(rootReducer, composedMiddleware)

middleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
