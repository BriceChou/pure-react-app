export const PROB_TENTH = Array(10).fill(0.1)

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
