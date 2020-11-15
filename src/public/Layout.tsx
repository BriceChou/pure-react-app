/** @format */

import React from 'react'
import Header from './Header'
import Demo from '../pages/demo'
import Navigation from './Navigation'
import Loading from '../components/Loading'
import LoadFailed from '../components/LoadFailed'
import { LoadingStatusEnum, LoadingTypeEnum } from '../types/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function Layout(props: PropsType) {
  const { pageLoading } = props
  if (pageLoading == LoadingStatusEnum.LOADING) {
    return <Loading type={LoadingTypeEnum.PAGE} />
  }
  if (pageLoading == LoadingStatusEnum.FAILED) {
    return <LoadFailed />
  }
  return (
    <React.Fragment>
      {/* <Header />
      <Navigation /> */}
      <Demo pageLoading={pageLoading} />
    </React.Fragment>
  )
}
