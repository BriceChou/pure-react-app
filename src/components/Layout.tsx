/** @format */

import React from 'react'
import Header from './Header'
import Loading from './Loading'
import LoadFailed from './LoadFailed'
import Navigation from './Navigation'
import { LoadingStatusEnum } from '../types/loadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function Layout(props: PropsType) {
  const { pageLoading } = props
  if (pageLoading == LoadingStatusEnum.Loading) {
    return <Loading />
  }
  if (pageLoading == LoadingStatusEnum.Failed) {
    return <LoadFailed />
  }
  return (
    <React.Fragment>
      <Header />
      <Navigation />
    </React.Fragment>
  )
}
