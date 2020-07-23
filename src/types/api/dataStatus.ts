/** @format */

export interface DataStatusType {
  // 错误信息
  message?: string
  // 时间戳
  timestamp: number
  // 200 failed 400 success
  code?: 400 | 200
  // 回调签名
  signature: number
}
