/**
 * 前端如何优雅地模拟接口请求？(给你的代码加点小意外) - BriceChou的文章 - 知乎
 * https://zhuanlan.zhihu.com/p/143549764
 *
 * 随机数据生成配上 vscode-faker 更香哦！
 * https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-faker
 *
 * @author bricechou@gmail.com
 */

import { addDaysToDate } from '@utils'
import type { DataStatusType } from '@type/dataStatus'
import { random, md5SafeAdd, PROB_TENTH, isObjectNull } from '@utils'

export interface DataErrorType {
  data: any
  errorMsg: string
  errorCode: number
}

function handleError(res: any, rj: any) {
  const status: DataStatusType = res?.status || {}
  rj({
    data: res,
    errorCode: status?.code || 500,
    errorMsg: status?.message || '垃圾服务器被网络挤爆啦～',
  })
}

function handleData(res: any) {
  if (res?.status?.code == 400) {
    return res
  }
  throw res
}

/**
 * 模拟接口请求
 *
 * @param data 模拟数据回传状态体
 * @param params 用于检查请求参数
 */
export function request<T>(data: T, params = {}, timeout = 0): Promise<T> {
  if (!isObjectNull(params)) {
    console.log(params)
  }
  if (!timeout) {
    timeout = random([0.1, 0.2, 0.5, 1, 2], [0.2, 0.3, 0.3, 0.1, 0.1]) * 1000
  }
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
 * 请求接口状态体回传
 *
 * @param count 失败概率阀值系数
 */
export function getDataStatusMockData(threshold = 1): DataStatusType {
  let res: DataStatusType = {
      // 时间戳
      timestamp: 0,
      // 回调签名
      signature: 0,
    },
    message = ''
  const timestamp = new Date().getTime()
  const failedProb = threshold * 0.05
  const successProb = failedProb >= 0.95 ? 0.05 : 0.95 - failedProb
  // 400：失败 200：成功
  const code = random([400, 200, void 0], [successProb, failedProb, 0.05])
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

/**
 * 获取最小到最大之间的数字
 *
 * @param minNum 最小数字
 * @param maxNum 最大数字
 */
export function getRandomNum(minNum: number, maxNum: number) {
  switch (arguments.length) {
    case 1:
      // @ts-ignore
      return handleNull(parseInt(Math.random() * minNum + 1, 10))
    case 2:
      // @ts-ignore
      return handleNull(parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10))
    default:
  }
  return 0
}

/**
 *
 * 获取随机字符串
 *
 * @param length 32
 * @param chars '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
export function getRandomStr(length = 0, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  if (length > 0) {
    let result = ''
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
    return handleNull(result)
  }
  return handleNull(Math.random().toString(36).slice(-8))
}

/**
 * 获取随机 boolean 值
 */
export function getRandomBool() {
  return handleNull(!!getRandomNum(0, 1))
}

/**
 * 可能有 10% 的概率返回 undefiend
 *
 * @param res 任意数值
 */
export function handleNull(res: any) {
  return Math.random() * 10 <= 9 ? res : void 0
}

/**
 * 获取随机数字 ID
 *
 * @param size ID 长度
 */
export function getRandomId(size: number) {
  return handleNull(getRandomStr(size, '0123456789'))
}

/**
 * 获取随机日期
 */
export function getRandomDate() {
  const days = getRandomNum(0, 999) || 0
  const now = new Date()
  return handleNull(addDaysToDate(now, days * (Math.random() * 10 <= 5 ? 1 : -1)))
}

/**
 *
 * refer to https://pravatar.cc/
 *
 * @param size 图片大小
 * @param id 图片ID -> [0, 70]
 */
export function getRandomAvatar(size = 300, id = 0) {
  return `https://i.pravatar.cc/${size}?img=${id || getRandomNum(0, 70)}`
}

/**
 * 获取随机图片
 * refer to : https://www.pexels.com/api/documentation/
 */
export function getRandomImage() {}

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
