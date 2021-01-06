/** @format */

import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Loading from '@component/Loading'
import LoadFailed from '@component/LoadFailed'
import { LoadingStatusEnum, LoadingTypeEnum } from '@type/enum/LoadingStatus'

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
    <>
      <Header />
      <Navigation />
    </>
  )
}
