/** @format */

import React from 'react'
import '../../static/css/loading.css'
import { LoadingTypeEnum } from '../types/LoadingStatusEnum'

interface PropsType {
  size?: number
  type?: LoadingTypeEnum
}

/**
 * 加载中组件
 */
export default function Loading(props: PropsType) {
  const { type = LoadingTypeEnum.MODAL, size = 24 } = props
  if (type == LoadingTypeEnum.MODAL) {
    return (
      <svg
        fill="none"
        width={size}
        height={size}
        strokeWidth="2"
        className="loader"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }
  return (
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object" id="object_one"></div>
          <div className="object" id="object_two"></div>
          <div className="object" id="object_three"></div>
          <div className="object" id="object_four"></div>
        </div>
      </div>
    </div>
  )
}
