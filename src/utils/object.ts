export const isFunction = (value: unknown): value is Function => typeof value === 'function'
export const isObjectNull = (obj: Object | null | undefined) => !(obj && Object.keys(obj).length)
// https://github.com/react-hook-form/react-hook-form/blob/master/src/utils/isNullOrUndefined.ts
export const isNullOrUndefined = (value: unknown): value is null | undefined => value == null
