/** @format */

import type { DataStatusType } from './dataStatus'

export interface getIndexDataRequestType {}

export interface getIndexDataResponseType {
  data?: DataType
  status: DataStatusType
}

interface DataType {
  // 是否加载中
  isLoading: number
}
