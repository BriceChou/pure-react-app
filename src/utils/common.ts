export function random(targetArr: any[], probArr: any[]) {
  let sum = 0,
    factor = 0,
    random = Math.random()
  for (let i in probArr) {
    sum += probArr[i]
  }
  random *= sum
  for (let i in probArr) {
    factor += probArr[i]
    if (random <= factor) {
      return targetArr[i]
    }
  }
  return null
}

export const PROB_TENTH = Array(10).fill(0.1)

export function md5SafeAdd(x: number, y: number) {
  var lsw = (x & 0xffff) + (y & 0xffff)
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
  return (msw << 16) | (lsw & 0xffff)
}

export function isArrayNull(arr: Array<any> | null | undefined) {
  return !arr || 0 === arr.length
}

export function isObjectNull(obj: Object | null | undefined) {
  return !obj || 0 === Object.keys(obj).length
}
