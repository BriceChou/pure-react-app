function getUserAgent(userAgent = ''): string {
  if (typeof navigator !== 'undefined') {
    userAgent = userAgent || navigator.userAgent || navigator.vendor
  }
  if (typeof window !== 'undefined') {
    // @ts-ignore
    userAgent = userAgent || window.opera
  }
  if (typeof userAgent !== 'string') {
    userAgent = ''
  }
  return userAgent
}

export { getUserAgent }
