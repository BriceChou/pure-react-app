/** @format */

import React from 'react'
import page_not_found from '../../static/img/404.svg'
import { LoadingStatusEnum } from '../types/loadingStatus'

interface PropsType {
  type?: LoadingStatusEnum
}

export default function LoadFailed(props: PropsType) {
  return <img src={page_not_found} className="" alt="404 Page not found" />
}
