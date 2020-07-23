/** @format */

/**
 * 前端如何优雅地模拟接口请求？(给你的代码加点小意外) - BriceChou的文章 - 知乎
 * https://zhuanlan.zhihu.com/p/143549764
 *
 * @author bricechou@gmail.com
 */
import type { DataStatusType } from '../types/api/dataStatus'
import { random, md5SafeAdd, PROB_TENTH } from '../utils/common'

export interface DataErrorType {
  data: any
  errorMsg: string
  errorCode: number
}

function handleError(res: any, rj: any) {
  const status: DataStatusType = (res && res.status) || {}
  rj({
    data: res,
    errorCode: status.code || 500,
    errorMsg: status.message || '垃圾服务器被网络挤爆啦～',
  })
}

function handleData(res: any) {
  if (res && res.status && res.status.code == 400) {
    return res
  }
  throw res
}

export function request<T>(data: T): Promise<T> {
  const timeout = random([0.1, 0.2, 0.5, 1, 2], [0.2, 0.3, 0.3, 0.1, 0.1]) * 1000
  return new Promise((rs, rj) => {
    setTimeout(() => {
      try {
        const res = handleData(data)
        console.log(res)
        rs(res)
      } catch (error) {
        handleError(error, rj)
      }
    }, timeout)
  })
}

/**
 * 请求失败接口回传
 *
 * @param count 失败阀值系数
 */
export function getDataStatusMockData(threshold = 1): DataStatusType {
  let res: DataStatusType = {
      // 时间戳
      timestamp: 0,
      // 回调签名
      signature: 0,
    },
    message = ''
  const failedProb = threshold * 0.05
  const timestamp = new Date().getTime()
  const code = random([400, 200, void 0], [0.95 - failedProb, failedProb, 0.05])
  if (code != 400) {
    message = random(
      [
        void 0,
        'est-qui-ex',
        'Sit amet odio et.',
        'Soluta id consequuntur.',
        'stay hungary, stay foolish.',
        'error-reprehenderit-officia',
        'talk is cheap, show me the code.',
        'Suscipit explicabo est et dolorem.',
        'Occaecati minima vel perferendis distinctio vel.',
        'Necessitatibus maxime quia repellat omnis enim et rerum.',
      ],
      PROB_TENTH,
    )
  }
  const signCode = code ? code : 500
  const signature = md5SafeAdd(timestamp, md5SafeAdd(signCode, md5SafeAdd(signCode, signCode)))
  if (code) {
    res.code = code
  }
  if (message) {
    res.message = message
  }
  return {
    ...res,
    timestamp,
    signature,
  }
}

// how to use ?
// step 1.
// function getIndexMockData() {
//   return {
//     data: {
//       isLoading: random([0, 1], [0.5, 0.5]),
//     },
//     status: getDataStatusMockData(1),
//   }
// }
// step 2.
// function demo() {
//   request(getIndexMockData())
//     .then(res => {
//       // TODO 获取请求成功
//       console.log(res)
//     })
//     .catch((e: DataErrorType) => {
//       // TODO 获取请求失败
//       console.warn(e)
//     })
// }
