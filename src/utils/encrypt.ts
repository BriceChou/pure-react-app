function md5SafeAdd(x: number, y: number) {
  var lsw = (x & 0xffff) + (y & 0xffff)
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
  return (msw << 16) | (lsw & 0xffff)
}

/**
 * 移除非法字符串
 *
 * @param str
 */
function removeInvalidSytax(str: string) {
  if (!str) {
    return ''
  }
  return str.replace(
    /[\~\!\@\#\$\%\^\&\* \(\)\/\\\|\,\.\<\>\?"';:_\+\-\=\[\]\{\}【】‘；：（）——”“'。，、！？《》]/gi,
    '',
  )
}

/**
 * 移除非法 HTML 字符标签
 *
 * @param str
 */
function removeHTMLTag(str: string) {
  if (!str) {
    return ''
  }
  return str.replace(/<\/?.+?\/?>/gi, '')
}

/**
 *
 * @param mobile 11位手机号码
 */
function encryptMobile(mobile: string): string {
  if (!mobile) return ''
  if (mobile.length < 4) return mobile
  const reg = /(\d{3}).{0,4}(\d{0,4})/
  return (mobile || '').replace(reg, '$1****$2')
}

export { md5SafeAdd, encryptMobile, removeInvalidSytax, removeHTMLTag }
