/** @format */

import react from 'react'
import App from './pages/App'
import ReactDOM from 'react-dom'
import '../static/css/bootstrap.min.css'

const app = react.createElement(App)

ReactDOM.render(app, document.getElementById('root'))
