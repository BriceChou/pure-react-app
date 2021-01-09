/** @format */
import React from 'react'
import App from './pages/App'
import '@css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import rootReducer from './stores'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
