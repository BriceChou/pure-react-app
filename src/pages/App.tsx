/** @format */

import React, { Component } from 'react'
import Layout from '../components/Layout'
import type { DataErrorType } from '../mock/request'
import { random, isObjectNull } from '../utils/common'
import { LoadingStatusEnum } from '../types/loadingStatus'
import { request, getDataStatusMockData } from '../mock/request'
import type { getIndexDataResponseType } from '../types/api/getIndexData'

interface PropsType {}

interface StateType {
  pageLoading: LoadingStatusEnum
}

export default class App extends Component<PropsType, StateType> {
  constructor(props: any) {
    super(props)
    this.state = {
      pageLoading: LoadingStatusEnum.Loading,
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
            pageLoading: res?.data?.isLoading ? LoadingStatusEnum.Loading : LoadingStatusEnum.Success,
          })
        } else {
          this.setState({
            pageLoading: LoadingStatusEnum.Success,
          })
        }
      })
      .catch((e: DataErrorType) => {
        // TODO 获取请求失败
        console.warn(e)
        this.setState({
          pageLoading: LoadingStatusEnum.Failed,
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
    return <Layout pageLoading={pageLoading} />
  }
}
