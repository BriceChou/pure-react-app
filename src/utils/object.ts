function isObjectNull(obj: Object | null | undefined) {
  return !obj || 0 === Object.keys(obj).length
}

export { isObjectNull }
