/** @format */
import React from 'react'
import App from './pages/App'
// import '@css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer, rootInitState } from '@stores'

const store = createStore(rootReducer, rootInitState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
