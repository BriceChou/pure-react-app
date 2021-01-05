import React from 'react'
import { LoadingStatusEnum } from '../../types/enum/LoadingStatus'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function About(props: PropsType) {
  return <>About me!</>
}
