/** @format */

import _ from 'lodash'
import React from 'react'
import next from './next'
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
  console.log('hello ', brice?.chou?.name, brice?.chou?.comma?.str || '!', _.get(brice, 'comma', 'bricechou test es6'))
}

ReactDOM.render(<App fu={testHandler} />, document.body)
