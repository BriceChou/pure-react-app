/** @format */

import Blog from './blog'
import Demo from './demo'
import About from './about'
import Login from './login'
import Layout from '../public/Layout'
import React, { Component } from 'react'
import { random, isObjectNull } from '../utils'
import type { DataErrorType } from '../mock/request'
import { LoadingStatusEnum } from '../types/enum/LoadingStatus'
import { request, getDataStatusMockData } from '../mock/request'
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom'
import type { getIndexDataResponseType } from '../types/api/getIndexData'

interface PropsType {}

interface StateType {
  pageLoading: LoadingStatusEnum
}

export default class App extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props)
    this.state = {
      pageLoading: LoadingStatusEnum.SUCCESS,
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
        if (!isObjectNull(res) && !isObjectNull(res?.data)) {
          this.setState({
            pageLoading: res?.data?.isLoading ? LoadingStatusEnum.LOADING : LoadingStatusEnum.SUCCESS,
          })
        } else {
          this.setState({
            pageLoading: LoadingStatusEnum.SUCCESS,
          })
        }
      })
      .catch((e: DataErrorType) => {
        // TODO 获取请求失败
        console.warn(e)
        this.setState({
          pageLoading: LoadingStatusEnum.FAILED,
        })
      })
  }

  componentDidMount() {
    // this.fetchIndexData()
  }

  render() {
    const {
      state: { pageLoading },
    } = this

    return (
      <>
        <HashRouter>
          <Switch>
            <Route path="/demo" component={Demo} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/blog/:id" component={Blog} />
            <Route path="/blog" render={({ location }) => <Redirect to={`/blog/1${location.search}`} />} />
            <Route path="/" component={Layout} />
          </Switch>
        </HashRouter>
      </>
    )
  }
}
