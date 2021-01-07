/** @format */

import React from 'react'
import page_not_found from '@image/404.svg'
import { LoadingTypeEnum } from '@type/enum/LoadingStatus'

interface PropsType {
  type?: LoadingTypeEnum
}

/**
 * 加载失败组件
 * 支持：页面，弹窗等
 */
export default function LoadFailed(props: PropsType) {
  const { type = LoadingTypeEnum.PAGE } = props
  if (type === LoadingTypeEnum.MODAL) {
    return null
  }
  return <img src={page_not_found} className="" alt="404 Page not found" />
}
