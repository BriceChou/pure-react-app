import React from 'react'
import { LoadingStatusEnum } from '../../types/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function Blog(props: PropsType) {
  return <>Blog Id: {location.search}</>
}
