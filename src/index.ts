/** @format */

import _ from 'lodash'
import next from './next'
import react from 'react'
import ReactDOM from 'react-dom'
import '../static/css/index.css'
import App from './components/App'

const testHandler = () => {
  const brice = {
    chou: {
      name: 'bricechou',
    },
    comma: {},
  }
  next()
  console.log('hello ', brice?.chou?.name, '!', _.get(brice, 'comma', 'bricechou test es6'))
}

const app = react.createElement(App, { fu: testHandler });

ReactDOM.render(app, document.body)
