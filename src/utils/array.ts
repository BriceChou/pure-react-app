function isArrayNull(arr: Array<any> | null | undefined) {
  return !arr || 0 === arr.length
}

export { isArrayNull }
