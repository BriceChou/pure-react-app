import querystring from 'querystring'
import { isArrayNull } from './array'
import { isObjectNull } from './object'

interface ParseParams {
  [key: string]: undefined | string | string[] | ParseParams | ParseParams[]
}

function removeDulicateParams(res: ParseParams) {
  if (isObjectNull(res)) {
    return {}
  }
  // 去除多次参数输入，只要第一个默认参数
  for (let key in res) {
    const val = res[key]
    if (res.hasOwnProperty(key) && val && Array.isArray(val) && val.length > 1) {
      res[key] = val[0]
    }
  }
  return res
}

/**
 * 获取 URL '?' 后所有的字符串
 */
function getUrlQueryStr(): string {
  const url = window.location.href
  const queryParams = url.split('?')
  if (isArrayNull(queryParams) || queryParams.length < 2) {
    return ''
  }
  return queryParams[1] || ''
}

/**
 * 获取当前查询参数，去除重复参数
 */
function getQueryParams(): ParseParams {
  const queryParams = window.location.search.split('?')
  if (isArrayNull(queryParams) || queryParams.length < 2) {
    return {}
  }
  const res = querystring.parse(queryParams[1] || '') || {}
  return removeDulicateParams(res)
}

export { getQueryParams, getUrlQueryStr }
