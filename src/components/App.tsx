/** @format */

import '../../static/css/App.css'
import React, { Component } from 'react'
import logo from '../../static/image/logo.svg'

interface PropsType {}

interface StateType {}

export default class App extends Component<PropsType, StateType> {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to bricechou.</h2>
        </div>
        <p className="app-intro">Hello my lord, BriceChou.</p>
      </div>
    )
  }
}
