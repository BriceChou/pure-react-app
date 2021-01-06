import React from 'react'
import { LoadingStatusEnum } from '../../types/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function Blog(props: PropsType) {
  const searchParams = location.search || 'hello'
  return <> &gt; &gt; &gt; Blog Id : {searchParams}</>
}
