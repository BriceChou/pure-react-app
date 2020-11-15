// 正则大全: https://any86.github.io/any-rule/

type ValidatorType =
  | 'taxNo'
  | 'cnName'
  | 'enName'
  | 'mobile'
  | 'notNull'
  | 'license'
  | 'accountNo'
  | 'identityNo'
  | 'tel'

function isValid(type: ValidatorType, v: string | number, encryptVal?: string, regExp?: RegExp) {
  if (v == void 0 || v == null) {
    return !!0
  }
  // 存在加密情况下，非空且与原值匹配即可
  if (v && encryptVal && encryptVal.indexOf('*') > -1 && v == encryptVal) {
    return !0
  }
  if (regExp) {
    return regExp.test(`${v}`)
  }
  switch (type) {
    // 营业执照号
    case 'license':
      const valLen = `${v}`.length
      if (valLen == 15) {
        return /^\d{15}$/.test(`${v}`)
      } else if (valLen == 18) {
        return /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/.test(`${v}`)
      }
      return false
    case 'identityNo':
      return /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(
        `${v}`,
      )
    case 'enName':
      return /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/.test(`${v}`)
    case 'cnName':
      return /^(?:[\u4e00-\u9fa5·]{2,16})$/.test(`${v}`) || /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/.test(`${v}`)
    case 'accountNo':
      return /^[1-9]\d{9,29}$/.test(`${v}`)
    case 'mobile':
      return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(
        `${v}`,
      )
    case 'tel':
      return /^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/.test(`${v}`)
    case 'taxNo':
      return /^[a-zA-Z0-9]{15}$|^[a-zA-Z0-9]{18}$|^[a-zA-Z0-9]{20}$/.test(`${v}`)
    default:
  }
  // 默认不为空
  return !!v
}

export { isValid }
export type { ValidatorType }
