/** @format */

import '../../static/css/App.css'
import React, { Component } from 'react'
import logo from '../../static/image/logo.svg'

interface PropsType {
  fu: Function
}

interface StateType {}

export default class App extends Component<PropsType, StateType> {
  render() {
    this.props.fu()
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>see 1src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}