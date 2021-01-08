export const fillEmptyArray = <T>(value: T | T[]): undefined[] | undefined =>
  Array.isArray(value) ? Array(value.length).fill(undefined) : undefined
export const isArrayNull = (arr: Array<any> | null | undefined) => !(arr && arr.length)
