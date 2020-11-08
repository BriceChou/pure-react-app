/** @format */

import React, { Component } from 'react'

interface PropsType {}

interface StateType {}

export default class App extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props)
  }

  timeout = 1

  componentDidMount() {}

  render() {
    return <div>{this.timeout}</div>
  }
}
