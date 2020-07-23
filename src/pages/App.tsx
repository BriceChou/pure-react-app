/** @format */

import '../../static/css/App.css'
import React, { Component } from 'react'
import Loading from '../components/Loading'
import logo from '../../static/image/logo.svg'
import { StatusEnum } from '../types/LoadingStatus'
import type { getIndexDataResponseType } from '../types/api/getIndexData'

import { random, isObjectNull } from '../utils/common'
import type { DataErrorType } from '../mock/request'
import { request, getDataStatusMockData } from '../mock/request'

interface PropsType {}

interface StateType {
  pageLoading: StatusEnum
}

export default class App extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props)
    this.state = {
      pageLoading: StatusEnum.Loading,
    }
  }

  getDataMockData() {
    return random(
      [
        {
          isLoading: random([0, 1], [0.8, 0.2]),
        },
        void 0,
        {},
      ],
      [0.75, 0.1, 0.15],
    )
  }

  getIndexMockData() {
    const data = this.getDataMockData()
    if (data) {
      return {
        data,
        status: getDataStatusMockData(1),
      }
    }
    return {
      status: getDataStatusMockData(1),
    }
  }

  fetchIndexData() {
    request(this.getIndexMockData())
      .then((res: getIndexDataResponseType) => {
        if (!isObjectNull(res) && !isObjectNull(res.data)) {
          this.setState({
            // @ts-expect-error
            pageLoading: res.data.isLoading ? StatusEnum.Loading : StatusEnum.Success,
          })
        } else {
          this.setState({
            pageLoading: StatusEnum.Success,
          })
        }
      })
      .catch((e: DataErrorType) => {
        // TODO 获取请求失败
        console.warn(e)
        this.setState({
          pageLoading: StatusEnum.Failed,
        })
      })
  }

  componentDidMount() {
    this.fetchIndexData()
  }

  render() {
    const {
      state: { pageLoading },
    } = this
    if (pageLoading == StatusEnum.Loading) {
      return <Loading />
    }
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
